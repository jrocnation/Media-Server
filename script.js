		var elapse_seconds = 0;
		var timer_enable = 0;
		var timerID;
		var tuneID = 'tech-hum'
		var PlayEndFlag = 0;
		var alternate_silence = 0;
		//=========================================================
		function StartUp() {

			var now = new Date();

			clearInterval(timerID);		// ***** to prevent repeat firing upon re-entry
			timerID = setInterval("OneSecondUpdate()", 1000);

			tuneID = 'tech-hum';
			document.getElementById(tuneID).play();

			PlayEndFlag = 0;
			timer_enable = 0;
			elapse_seconds = 0;
			window.document.theForm.txt_tuneID.value = 'Silence is Golden.   Touch image to play.';

		} // end function StartUp()

		//=========================================================


		function OneSecondUpdate() {

			var now = new Date();
			var displayStr;

			var weekday = new Array(7);

			weekday[0] = "Sunday";
			weekday[1] = "Monday";
			weekday[2] = "Tuesday";
			weekday[3] = "Wednesday";
			weekday[4] = "Thursday";
			weekday[5] = "Friday";
			weekday[6] = "Saturday";

			var dow = weekday[now.getDay()];

			var month = now.getMonth() + 1
			var day = now.getDate()
			var year = now.getFullYear()

			var hours = now.getHours();

			var hours_ampm;
			hours_ampm = hours;
			if (hours > 12) { hours_ampm = hours - 12; }
			if (hours == 0) { hours_ampm = 12; }

			var minutes = now.getMinutes();
			var seconds = now.getSeconds();

			var StrMin = String(minutes);
			if (minutes < 10) { StrMin = "0" + StrMin; }

			var StrSec = String(seconds);
			if (seconds < 10) { StrSec = "0" + StrSec; }

			var StrHour = String(hours_ampm);

			if (hours <= 11) { var StrAmPm = "AM"; }
			if (hours > 11) { var StrAmPm = "PM"; }
			if (hours == 0) { var StrAmPm = "AM"; }


			var displayStr_date = dow + ", " + String(month) + "/" + String(day) + "/" + String(year);
			var displayStr_time = StrHour + ":" + StrMin + ":" + StrSec + " " + StrAmPm;


			// Display Date & Time:
			window.document.theForm.txtDate.value = displayStr_date;
			window.document.theForm.txtTime.value = displayStr_time;

			//----------------------------------------------------------------

			switch (minutes) {
				case 0:
				case 15:
				case 30:
				case 45:
					if (seconds == 0) 	// right on the second
					{
						// place holder
					} // end if (seconds == 0)

					break;

				default:
					break;

			} // end switch (minutes)

			//----------------------------------------------------------------	

			if (timer_enable == 1) { elapse_seconds++; }

			var s = elapse_seconds % 60;           // %: Modulus operator provides the remainder of seconds / 60
			var m = parseInt(elapse_seconds / 60) % 60;
			var h = parseInt(elapse_seconds / 3600);

			var StrS = String(s);
			var StrM = String(m);

			if (s < 10) { StrS = "0" + StrS; }
			if (m < 10) { StrM = "0" + StrM; }

			window.document.theForm.txtElapse.value = StrM + ":" + StrS;
			//----------------------------------------------------------------		


			if (PlayEndFlag == 1) {
				stopMusic();
			}

			//=======================================================================
		} //end of function OneSecondUpdate()
		//==============================================================


		function stopMusic() {

			document.getElementById(tuneID).pause();   // close out previous play
			// tuneID ='cuckoo';
			tuneID = 'select-click';
			document.getElementById(tuneID).play();

			PlayEndFlag = 0;
			timer_enable = 0;
			elapse_seconds = 0;
			window.document.theForm.txt_tuneID.value = 'Silence is Golden.   Touch image to play.';

			// Alternating Silent Image
			alternate_silence = alternate_silence ^ 1;   // ^ : exclusive or with 1 will toggle that variable
			if (alternate_silence == 0) { document.image_Main.src = "images/*harmony.jpeg"; }
			// summer_white_beach_1280x720.jpg";	}	

			if (alternate_silence == 1) { document.image_Main.src = "images/*shoreline.jpeg"; }
			// grand-canyon-sunset-0127pm-1024x576.jpg";	}	


		}

		//=================================================

		function playGibson() {
			timer_enable = 1;
			document.image_Main.src = "images/*gibson.jpeg";

			// ** Close out previous play:
			document.getElementById(tuneID).pause();

			tuneID = 'gibson';
			document.getElementById(tuneID).currentTime = 0;
			document.getElementById(tuneID).play();

			window.document.theForm.txt_tuneID.value = 'Born Under A Bad Sign (2:48)';

			var aud = document.getElementById(tuneID);
			aud.onended = function () { PlayEndFlag = 1; };
		}

		function playRave() {
			timer_enable = 1;
			document.image_Main.src = "images/*rave.jpg";

			// ** Close out previous play:
			document.getElementById(tuneID).pause();

			tuneID = 'rave';
			document.getElementById(tuneID).currentTime = 0;
			document.getElementById(tuneID).play();

			window.document.theForm.txt_tuneID.value = 'Save My Life - Dubstep Mix (4:13)';

			var aud = document.getElementById(tuneID);
			aud.onended = function () { PlayEndFlag = 1; };
		}

		function playInfinite() {
			stopMusic();
			window.open("new-video.html");
		}	// end function

		//========================================================= 

		function playPeace() {
			timer_enable = 1;
			document.image_Main.src = "images/*peace.jpeg";

			// *** Close out previous play:
			document.getElementById(tuneID).pause();

			tuneID = 'peace';
			document.getElementById(tuneID).currentTime = 0;
			document.getElementById(tuneID).play();


			window.document.theForm.txt_tuneID.value = 'Art of Flight (4:22)';

			var aud = document.getElementById(tuneID);
			aud.onended = function () { PlayEndFlag = 1; };

		}

		//========================================================= 

		// =========== start Up ===========================

		StartUp()	

// ================================================
