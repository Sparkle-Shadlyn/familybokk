var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.pinimg.com/originals/3a/74/5d/3a745d3dcba72feb73e44e399ec97bea.jpg", "https://wallpaperaccess.com/full/2522028.png", "https://i.pinimg.com/236x/f5/60/ff/f560ff65386209e2a0df95fd8cc4bbee.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTn9rND_Og-VbMbvd0LXcDi1DEC-_D1ErPCA&usqp=CAU"];
var names = ["Family Book","Shadlyn Siddiqui ", "Ghazal Attarpour", "Shahid Siddiqui", "Sparkle"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }

    var updatedImage = images[i];
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
