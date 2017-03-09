
namespace Wigs.Areas.HelpPage
{
    public static class GetUserLogin
    {
        public static string GetUserLoginName()
        {
            var login = System.Security.Principal.WindowsIdentity.GetCurrent();

            return WebApiApplication.IsDebugVersion ? WebApiApplication.DebugUserName : login == null ? "" : login.Name.ToLower();
        }
    }
}