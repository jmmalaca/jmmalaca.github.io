var machine_name = "hi@malaca";
var prompt_char = "$";
var green_text = "[b;#44D544;]";
var white_text = "[b;#ffffff;#000000]";

//Start Prompt...
function StartPrompt(id) {
    //Start, Animated Text---
    var anim = false;
    var delay = 100;
    function typed(finishTyping) {
        return function (term, message, finish) {
            anim = true;
            var prompt = term.get_prompt();
            var c = 0;
            if (message.length > 0) {
                term.set_prompt('');
                var interval = setInterval(function () {
                    term.insert(message[c++]);
                    if (c == message.length) {
                        clearInterval(interval);
                        // execute in next interval
                        setTimeout(function () {
                            // swap command with prompt
                            finishTyping(term, message, prompt);
                            anim = false;
                            //finish && finish();
                        }, delay);
                    }
                }, delay);
            }
        };
    }

    var typedMessage = typed(function (term, message, prompt) {
        term.set_command('');
        term.echo(message);
        term.set_prompt(prompt);
    });
    //end---

    //Prompt Init...
    $(id).terminal(function (command, term) {
        firstCommands(term, command);
    }, {
        name: 'Prompt',
        history: true,
        historySize: 10,
        greetings: "       #                         #     #                                  #     #                                    \n" +
                   "       #  ####   ####  ######    ##   ## #  ####  #    # ###### #         ##   ##   ##   #        ##    ####    ##   \n" +
                   "       # #    # #      #         # # # # # #    # #    # #      #         # # # #  #  #  #       #  #  #    #  #  #  \n" +
                   "       # #    #  ####  #####     #  #  # # #      #    # #####  #         #  #  # #    # #      #    # #      #    # \n" +
                   " #     # #    #      # #         #     # # #  ### #    # #      #         #     # ###### #      ###### #      ###### \n" +
                   " #     # #    # #    # #         #     # # #    # #    # #      #         #     # #    # #      #    # #    # #    # \n" +
                   "  #####   ####   ####  ######    #     # #  ####   ####  ###### ######    #     # #    # ###### #    #  ####  #    # \n" +
                   "\n\n\nWelcome :D, type [" + green_text + "whoami], [" + green_text + "open linkedin], or [" + green_text + "help] and check more.\n\n",
        tabcompletion: true,
        prompt: function(p) {
          var path = '~';
          p(machine_name + ":" + path + prompt_char + " ");
        },
        onBlur: function () {
          //prevent loosing focus
          return false;
        }
    });
    //end----
}

//document ready event ----------
$(document).ready(function() {
    StartPrompt('#emulator');
});