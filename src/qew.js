const io = require("socket.io-client");
const is = require("is");
is.plainObject = require("is-plain-object");

// General API class
class API
{
    constructor( url, debug )
    {
        if ( !is.string(url) ) throw new Error("Param `url` must be string");

        this._url = url;
        this._session_id = null;
        this._is_authenticated = false;
        this.debug = debug;
        this.socket = null;
    };

    Auth ( auth_credentials )
    {
        //if ( !is.plainObject(auth_credentials) )
        return new Promise(( _self_resolve, _self_reject ) => 
        {
            // Init connection
            this.socket = io.connect( this._url );

            // Atach events
            this.socket.on("connect", () =>
            {
                // Send creditional
                this.socket.emit("authentication", auth_credentials);

                // Catch event if auth error
                this.socket.on("unauthorized", ( unauthorized_error ) =>
                {
                    if ( this.debug ) console.error( "Socket authentication failed", unauthorized_error );
                    // Set flag
                    this._is_authenticated = false;

                    //throw new Error("Authentication failed");
                    _self_reject( unauthorized_error );
                });

                // Auth complete
                this.socket.on("authenticated", ( data ) =>
                {
                    if ( this.debug ) console.info("Socket authentication complete");

                    // Set flag
                    this._is_authenticated = true;
                    // Save token
                    this._session_id = data.token;

                    _self_resolve( this );
                });
            });

            this.socket.on("disconnect", (data) =>
            {
                if ( this.debug ) console.info( "Socket disconnect....", data );
            });

            this.socket.on("reconnecting", (data) => 
            {
                if ( this.debug ) console.info( "Socket reconnecting....", data );
            });
        });
    };

    // Main function which send request to backend and waiting and recived response
    Send ( data )
    {
        return new Promise(( _self_resolve, _self_reject ) =>
        {
            if ( !this._is_authenticated ) return _self_reject( new Error("Please authenticate first") );
            if ( !this.socket.connected ) return _self_reject( new Error("Socket is not connected. Try again later or reconnect") );

            // All requests sends as json
            this.socket.json.send(data, (response) =>
            {
                if ( is.plainObject(response) )
                {
                    if ( response.result === true )
                    {
                        _self_resolve( response );
                    }
                    else
                    {
                        _self_reject( response );
                    };
                }
                else
                {
                    _self_reject( response );
                };
            });
        });
    };

    // Disconnect socket
    Logout ()
    {
        this.socket.emit("LogOut");
    };

    Close ()
    {
        if ( !this.socket ) return false;

        // Detach all event listeners
        this.socket.off();
        // Close connection
        this.socket.close();

        this._session_id = null;
        this._is_authenticated = false;
        this.socket = null;
        
        return true;
    };
};

module.exports = exports = API;