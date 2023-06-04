using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Web009
{
    public partial class XuLy : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Response.ContentType = "text/xml";
            string ten = "<ten>" + Request.Form["txtTen"] + "</ten>";
            string hang = "<hang>" + Request.Form["txtHang"] + "</hang>";
            string ngay = "<ngaysx>" + Request.Form["dNgaySX"] + "</ngaysx>";
            string gia = "<gia>" + Request.Form["fGia"] + "</gia>";

            Response.Write("<body>" + ten + hang + ngay + gia + "</body>");
        }
    }
}