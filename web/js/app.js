$(document).ready(function(){
    function add_favorite() { 
      var title=document.title; 
      var url=document.location; 
      var a = $(this);
      try { 
        // Internet Explorer 
        window.external.AddFavorite(url, title); 
      } 
      catch (e) { 
        try { 
          // Mozilla 
          window.sidebar.addPanel(title, url, ""); 
        } 
        catch (e) { 
          // Opera 
          if (typeof(opera)=="object") { 
            a.rel="sidebar"; 
            a.title=title; 
            a.url=url; 
            return true; 
          } 
          else { 
            // Unknown 
            alert('Нажмите Ctrl-D чтобы добавить страницу в закладки'); 
          } 
        } 
      } 
      return false; 
    }

    $('.star span').on('click', add_favorite);
});
