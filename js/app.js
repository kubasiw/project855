jQuery(document).ready(function(){

    var whell1 = jQuery('.whell1');
    var whell2 = jQuery('.whell2');

    // SmokeBox and elements of smoke
    var smokeBox = jQuery('.smokeBox');
    var smoke1 = jQuery('.smoke1');
    var smoke2 = jQuery('.smoke2');
    var smoke3 = jQuery('.smoke3');
    var smoke1 = jQuery('.smoke4');
    var smoke1 = jQuery('.smoke5');
    var smoke1 = jQuery('.smoke6');
    
    // Keys
    var keyBox = jQuery('.keyBox');
    var key = jQuery('.key');
    
    // Lights
    var lightBox = jQuery('.lightBox');
    var light = jQuery('.light');
    var headlight = jQuery('#headlight');
    var lightsOn1 = jQuery('.lightsOn1');
    
    
    
    // engine on / off
    function engineOnOff() { 
        keyBox.on('click', function(){
           
            if (key.hasClass('engineIsOn')) {
             
                key.removeClass('engineIsOn');
                key.css('transform','rotate(0deg)')
                   .css('transition', '500ms');
                setTimeout(function() {
                    smokeBox.css('opacity','0')
                            .css('transition', '1500ms');
                },500);
             
            } else {
                 key.addClass('engineIsOn');
                 key.css('transform','rotate(90deg)')
                    .css('transition', '500ms');
                 setTimeout(function() {
                    smokeBox.css('opacity','1')
                            .css('transition', '1500ms');
                },500);
            }
        });
    };
    engineOnOff();
    
    
    
    // lights on / off
    function lightsOnOff() { 
        lightBox.on('click', function(){
           
            if (light.hasClass('lightsIsOn')) {
             
                light.removeClass('lightsIsOn');
                light.css('transform','rotate(0deg)')
                     .css('transition', '500ms');
                setTimeout(function() {
                    lightsOn1.css('opacity','0')
                             .css('transition', '100ms');
                },500);
             
            } else {
                 light.addClass('lightsIsOn');
                 light.css('transform','rotate(90deg)')
                       .css('transition', '500ms');
                 setTimeout(function() {
                    lightsOn1.css('opacity','1')
                             .css('transition', '100ms');
                },500);
            }
        });
    };
    lightsOnOff();
    
    
    
}); // very last DOM colons

   