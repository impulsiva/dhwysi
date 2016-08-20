$(function() {
    $("#body").sceditor({
        plugins: "bbcode",
		locale: "tr",
		style: "https://rawgit.com/impulsiva/dhwysi/master/default.css",
		width: "300px",
		toolbar: "bold,italic,underline|color,emoticon,youtube|left,center,right|code,quote|source",
		emoticonsRoot: 'https://img.donanimhaber.com/upfiles/smiley/',
		emoticons:{
			dropdown: {
				"[sm=uhohu.gif]": "uhohu.gif",
				"[sm=alala.gif]": "alala.gif",
				"[sm=evillol.gif]": "evillol.gif",
				"[sm=You_Rock_Emoticon.gif]": "You_Rock_Emoticon.gif",
				"[sm=uptosomething.gif]": "uptosomething.gif",
				"[sm=bansign.gif]": "bansign.gif",
				"[sm=ok.gif]": "ok.gif",
				"[sm=aman.gif]": "aman.gif",
				"[sm=s19.gif]": "s19.gif",
			},
			more: {
				"[sm=bigdance2.gif]": "bigdance2.gif",
				"[sm=duel.gif]": "duel.gif",
				"[sm=s17.gif]": "s17.gif",
				"[sm=s18.gif]": "s18.gif",
				"[sm=zuhaha.gif]": "zuhaha.gif",
				"[sm=us.gif]": "us.gif",
				"[sm=s7.gif]": "s7.gif",
				"[sm=poke.gif]": "poke.gif",
			}
		}
    });
})(jQuery);
