﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Configuration;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace Wigs
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        public static bool IsDebugVersion = Convert.ToBoolean(WebConfigurationManager.AppSettings["DebugVersion"]);
        public static string DebugUserName = WebConfigurationManager.AppSettings["DebugVersionLoginName"];

        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}
