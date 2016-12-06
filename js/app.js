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
    
    // VARS gearbox
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
                     allGears.css('color', 'black');
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
                     
                     
                     if (knob.css('left') == '30'+'px') {
                         gP.css('color', 'white');
                     };
                     
                     if (knob.css('left') == '60'+'px') {
                         gN.css('color', 'white');
                     };
                     
                     if (knob.css('left') == '90'+'px') {
                         gR.css('color', 'white');
                     };
                     
                     if (knob.css('left') == '120'+'px') {
                         gD.css('color', 'white');
                     };
                    
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
    
    // Gearbox
    
    function gearBox() {
        
        gD.on('click', function(){

            knob.css('left', '120'+'px')
                .css('transition', '1s')

                setTimeout(function(){
                    revLight.css('opacity', '0')
                            .css('transition', '500ms');
                    revLightGlow.css('opacity', '0')
                                .css('transition', '500ms');
                },500);
            
            if (light.hasClass('lightsIsOn')) {
                allGears.css('color', 'black')
                        .css('transition', '500ms');
                gD.css('color', 'white')
                  .css('transition', '500ms');
            };

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
            knob.css('left', '90'+'px')
                .css('transition', '1s')


            if (key.hasClass('engineIsOn')) {
                knob.addClass('flashWhite');
                setTimeout(function() {
                    wheelF.css('transform','rotate(10000deg)')
                          .css('transition', '20s');
                    wheelR.css('transform','rotate(10000deg)')
                          .css('transition', '20s');
                },1000);
            };
           
            
            if (light.hasClass('lightsIsOn')) {
                allGears.css('color', 'black')
                        .css('transition', '500ms');
                gR.css('color', 'white')
                  .css('transition', '500ms');
            };

            
            if (knob.hasClass('flashWhite')) {
                setTimeout(function(){
                    revLight.css('opacity', '1')
                            .css('transition', '500ms');
                    revLightGlow.css('opacity', '1')
                                .css('transition', '500ms');
                },1000);
            }
        });


        gN.on('click', function(){
            knob.css('left', '60'+'px')
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
            
            if (light.hasClass('lightsIsOn')) {
                allGears.css('color', 'black')
                        .css('transition', '500ms');
                gN.css('color', 'white')
                  .css('transition', '500ms');
            };
            
        });

        gP.on('click', function(){
            knob.css('left', '30'+'px')
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
            
            if (light.hasClass('lightsIsOn')) {
                allGears.css('color', 'black')
                        .css('transition', '500ms');
                gP.css('color', 'white')
                  .css('transition', '500ms');
            };
        });
    };
    gearBox();
    
    // history menu
    var historyButton = jQuery('.historyBtn');
    var historyButtonA = jQuery('.historyBtn a');
    var historyBox = jQuery('.history');
    var specButton = jQuery('.specBtn');
    var specButtonA = jQuery('.specBtn a');
    var specBox = jQuery('.spec');
    
    function history() {
        
        historyButton.on('click', function(){
            
            historyBox.fadeToggle();
            historyButtonA.toggleClass('lightYellow');
            
            if (specButtonA.hasClass('lightYellow')) {
                specButtonA.removeClass('lightYellow')
            };
            
            
            if (specBox.css('display') == 'block'){
                specBox.css('display', 'none')
            };
        });
    };
    history();
    
    
    // spec menu
    function spec() {
        specButton.on('click', function(){
            
            specBox.fadeToggle();
            specButtonA.toggleClass('lightYellow');
            
            if (historyButtonA.hasClass('lightYellow')) {
                historyButtonA.removeClass('lightYellow')
            };
            
            if (historyBox.css('display') == 'block'){
                historyBox.css('display', 'none')
            };
        });
    };
    spec();  
    
    // dashbord hiding
    var ctrlPanel = jQuery('.ctrlPanel');
    var ctrlBtn = jQuery('.ctrlBtn');
    var ctrlBtnA = jQuery('.ctrlBtn a');
    
    function panel() {
        
        ctrlBtn.on('click', function(){
            
            ctrlPanel.fadeToggle();
            ctrlBtnA.toggleClass('lightYellow');
        });
    };
    panel();
    
    
    
    
    
    
    
    
    
    
    
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

   