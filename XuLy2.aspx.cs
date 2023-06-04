using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Web009
{
    public partial class XuLy2 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Response.ContentType = "text/xml";
            string ten = "<ten>" + Request.QueryString.Get("txtTen") + "</ten>";
            string hang = "<hang>" + Request.QueryString.Get("txtHang") + "</hang>";
            string ngay = "<ngaysx>" + Request.QueryString.Get("dNgaySX") + "</ngaysx>";
            string gia = "<gia>" + Request.QueryString.Get("fGia") + "</gia>";

            Response.Write("<body>" + ten + hang + ngay + gia + "</body>");
        }
    }
}