
     
        $(".open-menu").on("click", function(){
              $(".menu-bar").animate({
                right : 0,
              },700);
          });
          
     
          $(".close-menu").on("click", function(){
            $(".menu-bar").animate({
              right : -300,
            },700);
        });
        
      
