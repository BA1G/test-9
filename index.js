var numberOfFaqsBtn = document.querySelectorAll(".faqs-btn").length;

for(var i=0 ; i<numberOfFaqsBtn ; i++)
{

document.querySelectorAll(".faq-open-close-icon")[i].addEventListener("click" , function()
{
    var faqId = this.id;

    if ($("#"+faqId).hasClass("open"))
         {
        $("#"+faqId+"-div").css("display","block");
        $("#"+faqId).attr("src","assets/images/faq-close-icon.png");
        $("#"+faqId).removeClass("open");
        $("#"+faqId).addClass("close");

    } 
   else if($("#"+faqId).hasClass("close"))
        {
        $("#"+faqId+"-div").css("display","none");
        $("#"+faqId).attr("src","assets/images/faq-open-icon.png");
        $("#"+faqId).removeClass("close");
        $("#"+faqId).addClass("open");
    }
  
});

}
