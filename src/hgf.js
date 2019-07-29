const ApiConstructor = require("../index");
const credentials =
{
    login: "evgenyshevchenko@superbikefactory.co.uk",
    password: "asdASD123",
};
const debug = true;

const Examples = 
{
    AddLead: require("./examples/AddLead"),
    AddLeadNote: require("./examples/AddLeadNote"),
    AddLeadPhoto: require("./examples/AddLeadPhoto"),
    AddLeadValuation: require("./examples/AddLeadValuation"),
    FindLeadById: require("./examples/FindLeadById"),
    FindLeadByLeadomaticId: require("./examples/FindLeadByLeadomaticId"),
    GetBlemishReport: require("./examples/GetBlemishReport"),
    GetUserContent: require("./examples/GetUserContent"),
    UpdateBlemishReport: require("./examples/UpdateBlemishReport"),
    UpdateLeadStatus: require("./examples/UpdateLeadStatus"),
    // Get County id by name
    GetCountyByName: require("./examples/GetCountyByName"),
    // GET Affiliate Id using old_crm_affiliate_id
    GetAffiliateByOldCRMAffiliateId: require("./examples/GetAffiliateByOldCRMAffiliateId"),
    // Find Leads by customer regex phone number
    FindLeadByCustomerPhone: require("./examples/FindLeadByCustomerPhone"),
    // Find User by id
    FindUserById: require("./examples/FindUserById"),
    // Get lead_ids FROM crm WHERE status = ‘Do Not Contact’ and last_updated_date within 1 hour
    FindLeadWithHistoryWithin1HourAndStatusDoNotContact: require("./examples/FindLeadWithHistoryWithin1HourAndStatusDoNotContact"),
    // Get customer name, agent name, brand, model, valuation, year of registration WHERE lead_id = lead_id and Status is Priced or Pending
    GetLeadLead_customerBike_brandBike_modelByLeadId: require("./examples/GetLeadLead_customerBike_brandBike_modelByLeadId"),
    // Get lead_id, customer name, customer address, customer email, customer phone, customer division, created date, brand, model and year between 2 dates WHERE status  =  ‘Price Given’ AND Phone != ‘’ AND dialer_sync_date IS NULL AND createdDate BETWEEN 0 and 30 Days AND Division EQUALS ‘Leadomatic’
    //GetLeadBetweenDatesStatusPriceGivenAndLeadomaticDivision: require("./examples/GetLeadBetweenDatesStatusPriceGivenAndLeadomaticDivision"),
};

// Create instance API connection
const Api = global.Api = new ApiConstructor("https://connect-staging.superbikefactory.co.uk", debug);

// Authenticate
Api.Auth( credentials ).then((api) => 
{
    console.log(api);

    //Examples.GetUserContent( Api );


    // LogOut and disconnect socket
    setTimeout(() =>
    {
        Api.Logout();
    }, 5000);

}).catch((auth_error) =>
{
    console.log(auth_error);
});