var links = [
  "./cv/cv_jose_malaca.pdf",
  "https://twitter.com/jm_malaca",
  "https://www.facebook.com/jose.miguel.malaca",
  "http://instagram.com/josemiguelmalaca",
  "https://github.com/jmmalaca",
  "https://plus.google.com/u/0/108123132092292147984/posts",
  "https://www.linkedin.com/in/jmmalaca/",
  "http://www.codecademy.com/pt/jose.miguel.malaca",
  "https://coderbits.com/cartoon",
  "http://tecknologicus.blogspot.pt",
  "http://www.youtube.com/user/tOOnPT",
  "https://codebits.eu/cartOOn",
  "http://lxmls.it.pt/2014",
  "http://rawopendata.ipn.pt",
  "https://devfest.gdgcoimbra.xyz",
  "https://pixels.camp",
  "https://exercism.io/profiles/tOOnPT",
  "https://shiftappens.com"
];

var projectsLinks = [
  "https://invoicexpress.com/",
  "https://www.skisolutions.com/",
  "https://www.ipn.pt/projecto/57",
  "https://jovem.cascais.pt/go",
  "https://saudemental.p5.pt/"
]

//Start, Prompt commands...
function firstCommands(terminal, command) {
    if (command.match("^whoami$")) {
        terminal.echo("$ [" + white_text + "Hello :)]");
        terminal.echo("$ [" + white_text + "I was born and educated in the city that hosts one of the oldest universities in the world, Coimbra (Portugal).]");
        terminal.echo("$ [" + white_text + "I'm a Web/Ruby on Rails Engineer trying to follow the cake driven development, always learning, growing, enjoying life and working hard so one day I can be a good team/tech leader.]");
        terminal.echo("$");
        terminal.echo("$ [" + white_text + "I'm in love with the challenge of crafting n-tier applications and have experience building well-tested, robust REST web services that power web and native clients.]")
        terminal.echo("$ [" + white_text + "Crafting and developing powerful and performant REST web services using Ruby on Rails presents a lot of challenges - architect and implement new system features, design and develop asynchronous workers to process time-consuming tasks or even bugs fixing and codebases refactoring.]");
        terminal.echo("$");
        terminal.echo("$ [" + white_text + "Some key points:]");
        terminal.echo("$ [" + green_text + "☑] [" + white_text + "experience with Ruby and the Ruby on Rails web framework]");
        terminal.echo("$ [" + green_text + "☑] [" + white_text + "object oriented development skills]");
        terminal.echo("$ [" + green_text + "☑] [" + white_text + "experience building RESTful services]");
        terminal.echo("$ [" + green_text + "☑] [" + white_text + "craft PostgreSQL/MySQL SQL queries]");
        terminal.echo("$ [" + green_text + "☑] [" + white_text + "source management skills with GIT]");
        terminal.echo("$ [" + green_text + "☑] [" + white_text + "detail-oriented with organization skills]");
        terminal.echo("$ [" + green_text + "☑] [" + white_text + "don't just hack something, thoughtfully craft polished features]");
        terminal.echo("$ [" + green_text + "☑] [" + white_text + "bugs always up-to-date and deliver on time ;)]");
        terminal.echo("$ [" + green_text + "☑] [" + white_text + "testing is a norm]");
        terminal.echo("$ [" + green_text + "☑] [" + white_text + "pair programming and code reviews fan]");
        terminal.echo("$ [" + green_text + "☑] [" + white_text + "drive and a real passion for collaboration with a team]");
        terminal.echo("$ [" + green_text + "☑] [" + white_text + "motivated, independent and dedicated]");
        terminal.echo("$ [" + green_text + "☑] [" + white_text + "good written and verbal communicator]");
        terminal.echo("$ [" + green_text + "☑] [" + white_text + "give and take feedback well]");
        terminal.echo("$ [" + green_text + "☑] [" + white_text + "articulate ideas clearly]");
        terminal.echo(" [[b;#009900;#000000]ϟ] check more with [" + green_text + "social");

    } else if (command.match("^education$")) {
        terminal.echo("$ [" + green_text + "☑] [" + white_text + "Lisbon Machine Learning School] href=\""+ links[12] +"\" , Instituto Superior Técnico, Lisbon, Portugal");
        terminal.echo("$ [" + white_text + "Faculty of Science and Technology, University of Coimbra], Portugal");
        terminal.echo("  [" + green_text + "☑] [[b;#ffffff;#000000]Masters] in Informatics Engineering");
        terminal.echo("  [" + green_text + "☑] [[b;#ffffff;#000000]Erasmus] in Universitat Politècnica de València (UPV), Valencia, Spain");
        terminal.echo("  [" + green_text + "☑] Informatics Engineering [[b;#ffffff;#000000]Graduate]");
        terminal.echo("$ [" + white_text + "High School Avelar Brotero], Coimbra, Portugal");
        terminal.echo("  [" + green_text + "☑] Informatics [[b;#ffffff;#000000]Technician]");

    } else if (command.match("^career$")) {
        terminal.echo("$ Web/Ruby on Rails Engineer @ [" + white_text + "MarsBased], Full-remote, 2021/...");  
        terminal.echo("$ Head of Software Development & Web/Ruby on Rails Engineer @ [" + white_text + "The Loop Company], Coimbra, Portugal, 2019/2020");
        terminal.echo("$ Web/Ruby on Rails Engineer @ [" + white_text + "Laboratory for Informatics and Systems of Instituto Pedro Nunes(IPN)], Coimbra, Portugal, 2017/2019");
        terminal.echo("$ Web/Ruby on Rails Engineer @ [" + white_text + "InvoiceXpress], Lisboa, Portugal, 2015/17");
        terminal.echo("$ Software Engineer @ [" + white_text + "BroadScope.Lda], Coimbra, Portugal, 2014/15");
        terminal.echo("$ Software Engineer Trainee @ [" + white_text + "BroadScope.Lda], Coimbra, Portugal, 2013/14");

    } else if (command.match("^projects")) {
        terminal.echo("[" + green_text + "ϟ] use [" + green_text + "open] with:");
        terminal.echo("[" + green_text + "ϟ] [" + green_text + "...], @ MarsBased");
        terminal.echo("[" + green_text + "ϟ] [" + green_text + "SaudeMental], href=\"" + projectsLinks[4] + "\" @ The Loop Company");
        terminal.echo("[" + green_text + "ϟ] [" + green_text + "CascaisGo], href=\"" + projectsLinks[3] + "\" @ The Loop Company");
        terminal.echo("[" + green_text + "ϟ] [" + green_text + "Hotelcracy], href=\"" + projectsLinks[2] + "\" @ IPN");
        terminal.echo("[" + green_text + "ϟ] [" + green_text + "SkiSolutions], href=\"" + projectsLinks[1] + "\" @ IPN");
        terminal.echo("[" + green_text + "ϟ] [" + green_text + "InvoiceXpress], href=\"" + projectsLinks[0] + "\" @ InvoiceXpress");

    } else if (command.match("^social$")) {
        terminal.echo("[" + green_text + "ϟ] use [" + green_text + "open] with:");
        terminal.echo("[" + green_text + "ϟ] [" + green_text + "linkedIn], href=\"" + links[6] + "\"");
        terminal.echo("[" + green_text + "ϟ] [" + green_text + "twitter], href=\""+ links[1] +"\"");
        terminal.echo("[" + green_text + "ϟ] [" + green_text + "facebook], href=\"" + links[2] + "\"");
        terminal.echo("[" + green_text + "ϟ] [" + green_text + "instagram], href=\"" + links[3] + "\"");
        terminal.echo("[" + green_text + "ϟ] [" + green_text + "googlePlus], href=\"" + links[5] + "\"");
        terminal.echo("[" + green_text + "ϟ] [" + green_text + "blogger], href=\"" + links[9] + "\"");
        terminal.echo("[" + green_text + "ϟ] [" + green_text + "youTube], href=\"" + links[10] + "\"");

    } else if (command.match("^events$")) {
        terminal.echo("[" + green_text + "☑] ShiftAppens 2019, href=\"" + links[17] + "\"");
        terminal.echo("[" + green_text + "☑] Pixels Camp 2019, href=\"" + links[15] + "\"");
        terminal.echo("[" + green_text + "☑] GDG DevFest 2019, href=\"" + links[14] + "\"");
        terminal.echo("[" + green_text + "☑] ShiftAppens 2018, href=\"" + links[17] + "\"");
        terminal.echo("[" + green_text + "☑] GDG DevFest 2018, href=\"" + links[14] + "\"");
        terminal.echo("[" + green_text + "☑] Pixels Camp 2017, href=\"" + links[15] + "\"");
        terminal.echo("[" + green_text + "☑] Pixels Camp 2016, href=\"" + links[15] + "\"");
        terminal.echo("[" + green_text + "☑] GDG DevFest 2016, href=\"" + links[14] + "\"");
        terminal.echo("[" + green_text + "☑] SAPO Codebits 2014, href=\"" + links[11] + "\"");
        terminal.echo("[" + green_text + "☑] Raising Awareness RAW Of Open Data 2014, href=\"" + links[13] + "\"");

    } else if (command.match("^contact$")) {
        terminal.echo("$ you can mail me @ jose.miguel.malaca@me.com");

    } else if (command.match("^open [a-zA-Z]+$")) {
        openWhat(terminal, command);

    } else if (command.match("^send")) {
        sendMail(terminal, command);

    }else if (command.match("^help$")) {
        terminal.echo(">available [" + white_text + "commands] (for now...) {" +
            "\n [" + white_text + "< whoami >]" +
            "\n [" + white_text + "< education >]" +
            "\n [" + white_text + "< career >]" +
            "\n [" + white_text + "< projects >]" +
            "\n [" + white_text + "< social >]" +
            "\n [" + white_text + "< events >]" +
            "\n [" + white_text + "< contact >]" +
            "\n" +
            "\n [" + white_text + "< open > < what? >]" +
            // "\n [" + white_text + "< send >] mail" +
            "\n [" + white_text + "< help > or < help > < what? >]" +
            "\n [" + white_text + "< clear >]" +
            "\n [" + white_text + "< history >]" +
            "\n [" + white_text + "< version >]" +
            "\n}");
    } else if (command.match("^help [a-zA-Z]+$")) {
        helpWhat(terminal, command);

    } else if (command.match("^history$")) {
        if (terminal.history().data().length > 0) {
            terminal.echo(">last [max = 10] commands:");
            for (var elem in terminal.history().data())
                terminal.echo(" >" + terminal.history().data()[elem]);
        } else {
            terminal.echo(">No history available...");
        }

    } else if (command.match("^version$")) {
        terminal.echo("$ currently in version v1.0... :P \n" +
                      "$ This page is built with jQuery Terminal Emulator plugin, and hosted by GitHub Pages.\n" +
                      "$ Source code is available on GitHub.\n" +
                      "$ It's always under development... keep visting for many cool things on the future. ;)");

    } else {
        terminal.error(">Unknown command or some syntax error \"" + command + "\"" +
            "\n type \"help\"... ;)");
    }
}
//end----

//start, send mail...
function sendMail(terminal, command) {
    var regexRule = "<[a-zA-Z ]+>" + //name
        " <[a-zA-Z0-9\\_\\-\\.]+@(([a-zA-Z0-9-]+\\.)+)([a-zA-Z]{2,4})>" + //mail
        " <.+>$"; //text

    //console.log("<[a-zA-Z0-9\\_\\-\\.]+@(([a-zA-Z0-9-]+\\.)+)([a-zA-Z]{2,4})>"); //see if everything is right about the mail ;)

    if (command.match(regexRule) != null) {
        var atributes = command.split("<");
        var name = atributes[1].substring(0, atributes[1].length - 2);
        var mail = atributes[2].substring(0, atributes[2].length - 2);
        var text = atributes[3].substring(0, atributes[3].length - 1);
        terminal.echo("> Data check: " +
            "\n  Name: " + name +
            "\n  Mail: " + mail +
            "\n  Text: " + text);

        if (name == "")
            terminal.error(">Couldn't send your mail... miss your name");
        else if (mail == "")
            terminal.error(">Couldn't send your mail... miss your mail");
        else if (text == "")
            terminal.error(">Couldn't send your mail... miss you message");
        else {
            var mailData = name + ", " + mail + ", " + text;
            window.open("mailto:jose.miguel.malaca@me.com?subject=Contact&body=" + mailData);
            terminal.echo("[[b;#009900;#000000]Sended]. Thx, i will responde you shortly... ;)");
        }
    } else {
        terminal.error(">Couldn't send your mail... use \"help send\" ;)");
    }
}
//end---

//start, help commands...
function helpWhat(terminal, command) {
    var what = command.replace("help", "");
    //terminal.echo(">HELP: " + what);
    if (what.match("who$")) {
        terminal.echo(">[[b;#388E8E;#000000]A text about me.]");

    }else if (what.match("education$")) {
        terminal.echo(">[[b;#388E8E;#000000]My education path.]");

    }else if (what.match("career$")) {
        terminal.echo(">[[b;#388E8E;#000000]My professional path.]");

    }else if (what.match("projects$")) {
        terminal.echo(">[[b;#388E8E;#000000]My projects path.]");

    }else if (what.match("social$")) {
        terminal.echo(">[[b;#388E8E;#000000]My social networks links.]");

    }else if (what.match("events$")) {
        terminal.echo(">[[b;#388E8E;#000000]A list of some events I went and recomend.]");

    }else if (what.match("contact$")) {
        terminal.echo(">[[b;#388E8E;#000000]Reach me by email.]");

    }else if (what.match("open$")) {
        terminal.echo(">[[b;#388E8E;#000000]Use this command to <open> some <social>, <event> link or my <curriculum>.]");
        terminal.echo(">[[b;#388E8E;#000000]For example: \"open twitter\", \"open raw\" or \"open curriculum\"");

    }else if (what.match("send$")) {
        terminal.echo(">[[b;#388E8E;#000000]Use this to send me a email.]");
        terminal.echo(">[[b;#388E8E;#000000]Example: write: send <your name> <your email> <your message> and press enter ;D]");
        terminal.echo(">[[b;#FF0000;#000000]Important:] [[b;#388E8E;#000000]Please insert the \"<\" and \">\" marks. They're used to separate and retrieve your data. :) Thx.]");

    } else if (what.match("clear$")) {
        terminal.echo(">[[b;#388E8E;#000000]Clear the prompt.]");

    } else if (what.match("help$")) {
        terminal.echo(">[[b;#388E8E;#000000]Examples and data to Help you with the prompt.]");

    } else if (what.match("history$")) {
        terminal.echo(">[[b;#388E8E;#000000]See the last 10 commands.]");

    } else if (what.match("version$")) {
        terminal.echo(">[[b;#388E8E;#000000]The prompt version.]");

    } else {
        terminal.error(">Unknown command or some syntax error \"" + command + "\"" +
            "\n type \"help open\"... ;)");
    }
}
//end---

//start, open commands...
function openWhat(terminal, command) {
    var what = command.replace("open", "");
    //terminal.echo(">OPEN: " + what);
    var link = "";
    if (what.match("curriculum$")) {
        link = links[0];
    }
    else if (what.match("twitter$")) {
        link = links[1];
    }
    else if (what.match("facebook$")) {
        link = links[2];
    }
    else if (what.match("instagram$")) {
        link = links[3];
    }
    else if (what.match("github$")) {
        link = links[4];
    }
    else if (what.match("googleplus$")) {
        link = links[5];
    }
    else if (what.match("linkedin$")) {
        link = links[6];
    }
    else if (what.match("codeacademy$")) {
        link = links[7];
    }
    else if (what.match("coderbits$")) {
        link = links[8];
    }
    else if (what.match("blogger$")) {
        link = links[9];
    }
    else if (what.match("youtube$")) {
        link = links[10];
    }
    else if (what.match("sapo$")) {
        link = links[11];
    }
    else if (what.match("lxmls$")) {
        link = links[12];
    }
    else if (what.match("raw$")) {
        link = links[13];
    }
    else if (what.match("devfest$")) {
        link = links[14];
    }
    else if (what.match("pixels")) {
        link = links[15];
    }
    else if (what.match("exercism")) {
        link = links[16];
    }
    else if (what.match("shiftappens")) {
        link = links[17];
    }
    else if (what.match("[Ii]nvoice[Xx]press")) {
        link = projectsLinks[0];
    }
    else if (what.match("[Ss]ki[Ss]olutions")) {
        link = projectsLinks[1];
    }
    else if (what.match("[Hh]otelcracy")) {
        link = projectsLinks[2];
    }
    else if (what.match("[Cc]ascais[Gg]o")) {
        link = projectsLinks[3];
    }
    else if (what.match("[[Ss]aude[Mm]ental")) {
        link = projectsLinks[4];
    }
    else {
        terminal.error(">Unknown command or some syntax error \"" + command + "\"" +
            "\n type \"help open\"... ;)");
    }

    if (link.length > 0)
        window.open(link);
}
//end----

