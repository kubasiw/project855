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
                    headlight.css('opacity','0')
                             .css('transition', '100ms');
                },500);
             
            } else {
                 light.addClass('lightsIsOn');
                 light.css('transform','rotate(90deg)')
                       .css('transition', '500ms');
                 setTimeout(function() {
                    lightsOn1.css('opacity','1')
                             .css('transition', '100ms');
                    headlight.css('opacity','1')
                             .css('transition', '100ms');
                },500);
            }
        });
    };
    lightsOnOff();
    
    
    // Indicators
    var glows = jQuery(('div[class*=glow]'));
    var indicators = jQuery(('[id*=indicator]'));
    var triangleBox = jQuery('.triangleBox');
    var triangleWhite = jQuery('.triangleWhite');
    
    function indicatorsOnOff() {
        triangleBox.on('click', function(){
           
            if (jQuery(this).attr('on')){
                clearInterval(flashing);
                jQuery(this).removeAttr('on');
                glows.css('opacity', '0');
                indicators.css('opacity', '0');
                triangleWhite.css('border-bottom', '45px solid white');
                
            } else {
                
                jQuery(this).attr('on','true');
                //var status = 'off';
                flashing = setInterval(function(){
                    if (status == 'off'){   
                        status = 'on';
                        glows.css('opacity', '1')
                             .css('transition', '500ms');
                        indicators.css('opacity', '1')
                                  .css('transition', '500ms');
                        triangleWhite.css('border-bottom', '45px solid #C4BD40')
                                     .css('transition', '500ms');
                        
                    } else {
                        status='off';
                        glows.css('opacity', '0');
                        indicators.css('opacity', '0');
                        triangleWhite.css('border-bottom', '45px solid white');
                    }
                },550);
            }
        });
    };
    indicatorsOnOff();
    
    // Gearbox makes wheel rotating
    
    var gP = jQuery('.gear_P');
    var gN = jQuery('.gear_N');
    var gR = jQuery('.gear_R');
    var gD = jQuery('.gear_D');
    var allGears = jQuery(('div[class*=gear_]'));
    
    var knob = jQuery('.gearKnobLow');
    var revLightGlow = jQuery('.revLightOn');
    var revLight = jQuery('#rearLight');
    
    var wheelF = jQuery('.wheel1');
    var wheelR = jQuery('.wheel2');
    console.log(wheelF);
    
    
    function gearBox() {
        
        gD.on('click', function(){
            knob.css('left', '186'+'px')
                .css('transition', '1s')
                .removeClass('flashWhite');
            
            if (!knob.hasClass('flashWhite')) {
                setTimeout(function(){
                    revLight.css('opacity', '0')
                            .css('transition', '500ms');
                    revLightGlow.css('opacity', '0')
                                .css('transition', '500ms');
                },500);
            }
            
            if (key.hasClass('engineIsOn')) {
                setTimeout(function() {
                    wheelF.css('transform','rotate(-10000deg)')
                          .css('transition', '20s');
                    wheelR.css('transform','rotate(-10000deg)')
                          .css('transition', '20s');
                },500);
            };
        });
        
        
        gR.on('click', function(){
            knob.css('left', '139'+'px')
                .css('transition', '1s')
                .addClass('flashWhite');
            
            if (knob.hasClass('flashWhite')) {
                setTimeout(function(){
                    revLight.css('opacity', '1')
                            .css('transition', '500ms');
                    revLightGlow.css('opacity', '1')
                                .css('transition', '500ms');
                },1000);
            }
            
            if (key.hasClass('engineIsOn')) {
               setTimeout(function() {
                    wheelF.css('transform','rotate(10000deg)')
                          .css('transition', '20s');
                    wheelR.css('transform','rotate(10000deg)')
                          .css('transition', '20s');
                },1000);
            };
        });
        
        
        
        gN.on('click', function(){
            knob.css('left', '92'+'px')
                .css('transition', '1s')
                .removeClass('flashWhite');
            
            if (!knob.hasClass('flashWhite')) {
                setTimeout(function(){
                    revLight.css('opacity', '0')
                            .css('transition', '500ms');
                    revLightGlow.css('opacity', '0')
                                .css('transition', '500ms');
                },500);
            }
        });
        
        gP.on('click', function(){
            knob.css('left', '45'+'px')
                .css('transition', '1s')
                .removeClass('flashWhite');
            
            if (!knob.hasClass('flashWhite')) {
                setTimeout(function(){
                    revLight.css('opacity', '0')
                            .css('transition', '500ms');
                    revLightGlow.css('opacity', '0')
                                .css('transition', '500ms');
                },500);
            }
        });
    }
    gearBox();
    
    
    
    
//    function gearsColor() {
//        allGears.on('mouseover', function(){
//            jQuery(this).css('color', '#fbf098');
//        });
//        allGears.on('mouseout', function(){
//            jQuery(this).css('color', 'black');
//        });
//    };
//    gearsColor();
    
    
    
    
}); // end of DOM

   