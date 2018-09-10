
function scroll_to_class(element_class, removed_height) {
	var scroll_to = $(element_class).offset().top - removed_height;
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 0);
	}
}

function bar_progress(progress_line_object, direction) {
	var number_of_steps = progress_line_object.data('number-of-steps');
	var now_value = progress_line_object.data('now-value');
	var new_value = 0;
	if(direction == 'right') {
		new_value = now_value + ( 100 / number_of_steps );
	}
	else if(direction == 'left') {
		new_value = now_value - ( 100 / number_of_steps );
	}
	progress_line_object.attr('style', 'width: ' + new_value + '%;').data('now-value', new_value);
}

jQuery(document).ready(function() {
	
    /*
        Fullscreen background
    */
    
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$.backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$.backstretch("resize");
    });
    
    /*
        Form
    */
    $('.f1 fieldset:first').fadeIn('slow');
    
    $('.f1 input[type="text"], .f1 input[type="password"], .f1 textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    // next step
    /*$('.f1 .btn-next').on('click', function() {
    	var parent_fieldset = $(this).parents('fieldset');
    	var next_step = true;
    	// navigation steps / progress steps
    	var current_active_step = $(this).parents('.f1').find('.f1-step.active');
    	var progress_line = $(this).parents('.f1').find('.f1-progress-line');

        //Validacion de Campos:
    	var placa_reg = $("#placa_reg").val();
    	var nroasientos_reg = $("#nroasientos_reg").val();
    	var nromotor_reg = $("#nromotor_reg").val();
    	var sumaasegurada_reg = $("#sumaasegurada_reg").val();
    	var vin_reg = $("#vin_reg").val();
    	var nroserie_reg = $("#nroserie_reg").val();

    	if (placa_reg.length < 1) {
    	    next_step = false;    	    
    	    ErrorText("Debe ingresar el nro. de placa");
    	    $("#placa_reg").focus();
    	} else if (nroasientos_reg.length < 1) {
    	    next_step = false;
    	    ErrorText("Debe ingresar el nro. de asientos");
    	    $("#nroasientos_reg").focus();
    	} else if (nromotor_reg.length < 1) {
    	    next_step = false;
    	    ErrorText("Debe ingresar el nro. de motor");
    	    $("#nromotor_reg").focus();
    	}  else if (vin_reg.length < 1) {
    	    next_step = false;
    	    ErrorText("Debe ingresar el VIN");
    	    $("#vin_reg").focus();
    	} else if (nroserie_reg.length < 1) {
    	    next_step = false;
    	    ErrorText("Debe ingresar el nro. de serie");
    	    $("#nroserie_reg").focus();
    	} else {
    	    next_step = true;
    	    SuccesText();
    	}


    	// fields validation
    	
    	if( next_step ) {
    		parent_fieldset.fadeOut(400, function() {
    			// change icons
    			current_active_step.removeClass('active').addClass('activated').next().addClass('active');
    			// progress bar
    			bar_progress(progress_line, 'right');
    			// show next step
	    		$(this).next().fadeIn();
	    		// scroll window to beginning of the form
    			scroll_to_class( $('.f1'), 20 );
	    	});
    	}
    	
    });*/

    $('.f1 .btn-next').on('click', function () {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;
        // navigation steps / progress steps
        var current_active_step = $(this).parents('.f1').find('.f1-step.active');
        var progress_line = $(this).parents('.f1').find('.f1-progress-line');
        next_step = true;
        // fields validation
        //parent_fieldset.find('input[type="text"], input[type="password"],input[type="email"], textarea').each(function () {

            //if ($(this).val() == "") {
            //    $(this).addClass('input-error');
            //    next_step = false;                
            //}
            //else {
            //    $(this).removeClass('input-error');
            //}        


        parent_fieldset.find('#nropoliza_reg').each(function () {

            if ($('#nropoliza_reg').val() == "" ) {
                if ($('#nropoliza_reg').val() == "") $('#nropoliza_reg').addClass('input-error');
                next_step = false;
            }
            else
            {

                $(this).removeClass('input-error');

            }
        });

        parent_fieldset.find('#nrodocumento_reg, #nombres_reg', '#paterno_reg', '#materno_reg', '#celular_reg').each(function () {

            if ($('#nrodocumento_reg').val() == "" || $('#nombres_reg').val() == "" || $('#paterno_reg').val() == "" || $('#materno_reg').val() == "" || $('#celular_reg').val() == "") {
                            
            if ($('#nrodocumento_reg').val() == "") $('#nrodocumento_reg').addClass('input-error');
            if ($('#nombres_reg').val() == "") $('#nombres_reg').addClass('input-error');
            if ($('#paterno_reg').val() == "") $('#paterno_reg').addClass('input-error');
            if ($('#materno_reg').val() == "") $('#materno_reg').addClass('input-error');
            if ($('#celular_reg').val() == "") $('#celular_reg').addClass('input-error');

                next_step = false;
            }
            else
            {

                $(this).removeClass('input-error');

            }


  });
        

        //});
        // fields validation

        if (next_step) {
            parent_fieldset.fadeOut(400, function () {
                // change icons
                current_active_step.removeClass('active').addClass('activated').next().addClass('active');
                // progress bar
                bar_progress(progress_line, 'right');
                // show next step
                $(this).next().fadeIn();
                // scroll window to beginning of the form
                scroll_to_class($('.f1'), 20);
            });
        }

    });
    
    // previous step
    $('.f1 .btn-previous').on('click', function() {
    	// navigation steps / progress steps
    	var current_active_step = $(this).parents('.f1').find('.f1-step.active');
    	var progress_line = $(this).parents('.f1').find('.f1-progress-line');
    	
    	$(this).parents('fieldset').fadeOut(400, function() {
    		// change icons
    		current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
    		// progress bar
    		bar_progress(progress_line, 'left');
    		// show previous step
    		$(this).prev().fadeIn();
    		// scroll window to beginning of the form
			scroll_to_class( $('.f1'), 20 );
    	});
    });
    
    // submit
    $('.f1').on('submit', function(e) {
    	
    	// fields validation
    	$(this).find('input[type="text"], input[type="password"], textarea').each(function() {
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	// fields validation
    	
    });
    
    
});
