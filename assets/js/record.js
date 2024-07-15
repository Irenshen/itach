document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector("audio")) {
    let mediaRecorder;
    let stream;
    let voiceBlob = [];
    let timeLimit = 60; //limit time
    let timerCountdownInterval;
    const timerCountdownElement = document.querySelector(".voice-countdown");
    const voicemessageInput = document.querySelector("#voicemessage");

    document.querySelector("#start").addEventListener("click", function () {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream_) => {
          stream = stream_;
          mediaRecorder = new MediaRecorder(stream);
          mediaRecorder.start();
          this.style.display = "none";
          document.querySelector("#stop").style.display = "block";
          timerCountdownElement.style.display = "block";
          timerCountdown(timeLimit);

          //record
          mediaRecorder.addEventListener("dataavailable", function (event) {
            voiceBlob.push(event.data);
          });

          mediaRecorder.addEventListener("stop", function () {
            const audioBlob = new Blob(voiceBlob, {
              type: "audio/wav",
            });
            const url = URL.createObjectURL(audioBlob);
            document.getElementById("audio").setAttribute("src", url);
          });
        })
        .catch((error) => {
          if (error.name === "NotAllowedError") {
            alert(
              "Разрешение на доступ к вашему микрофону отклонено. Пожалуйста, разрешите доступ к записи звука."
            );
          } else {
            console.error("Ошибка доступа к микрофону:", error);
          }
        });
    });

    function stopRecording() {
      mediaRecorder.stop();
      document.querySelector("#stop").style.display = "none";
      timerCountdownElement.style.display = "none";
      document.querySelector("#delete").style.display = "block";
      document.querySelector("#audio").style.display = "block";
      timerCountdownElement.textContent = "";
      clearInterval(timerCountdownInterval); // stop timer
    }

    document.querySelector("#stop").addEventListener("click", stopRecording);

    document.querySelector("#delete").addEventListener("click", function () {
      mediaRecorder.stop();
      this.style.display = "none";
      document.querySelector("#audio").style.display = "none";
      document.querySelector("#start").style.display = "block";
      document.getElementById("audio").src = "";
      voicemessageInput.value = "";
      timerCountdownElement.textContent = "1:00";
      timeLimit = 60;
    });

    const timerCountdown = (duration) => {
      timerCountdownElement.textContent = `${Math.floor(duration / 60)}:${(
        duration % 60
      )
        .toString()
        .padStart(2, "0")}`;
      timerCountdownInterval = setInterval(() => {
        if (duration <= 0) {
          clearInterval(timerCountdownInterval);
          stopRecording();
        } else {
          duration--;
          timerCountdownElement.textContent = `${Math.floor(duration / 60)}:${(
            duration % 60
          )
            .toString()
            .padStart(2, "0")}`;
        }
      }, 1000);
    };
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   if (document.querySelector("audio")) {
//     navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
//       const mediaRecorder = new MediaRecorder(stream);
//       let voiceBlob = [];
//       let timeLimit = 60; //limit time
//       let timerCountdownInterval;
//       const timerCountdownElement = document.querySelector(".voice-countdown");
//       const voicemessageInput = document.querySelector("#voicemessage");

//       document.querySelector("#start").addEventListener("click", function () {
//         mediaRecorder.start();
//         this.style.display = "none";
//         document.querySelector("#stop").style.display = "block";
//         timerCountdownElement.style.display = "block";
//         timerCountdown(timeLimit);
//       });

//       //record
//       mediaRecorder.addEventListener("dataavailable", function (event) {
//         voiceBlob = new Blob([event.data], {
//           type: "audio/wav",
//         });
//         const url = URL.createObjectURL(voiceBlob);
//         document.getElementById("audio").setAttribute("src", url);
//       });

//       function stopRecording() {
//         mediaRecorder.stop();
//         document.querySelector("#stop").style.display = "none";
//         timerCountdownElement.style.display = "none";
//         document.querySelector("#delete").style.display = "block";
//         document.querySelector("#audio").style.display = "block";
//         timerCountdownElement.textContent = "";
//         clearInterval(timerCountdownInterval); // stop timer
//       }

//       document.querySelector("#stop").addEventListener("click", stopRecording);

//       document.querySelector("#delete").addEventListener("click", function () {
//         mediaRecorder.stop();
//         this.style.display = "none";
//         document.querySelector("#audio").style.display = "none";
//         document.querySelector("#start").style.display = "block";
//         document.getElementById("audio").src = "";
//         voicemessageInput.value = "";
//         timerCountdownElement.textContent = "1:00";
//         timeLimit = 60;
//       });

//       const timerCountdown = (duration) => {
//         timerCountdownElement.textContent = `${Math.floor(duration / 60)}:${(
//           duration % 60
//         )
//           .toString()
//           .padStart(2, "0")}`;
//         timerCountdownInterval = setInterval(() => {
//           if (duration <= 0) {
//             clearInterval(timerCountdownInterval);
//             stopRecording();
//           } else {
//             duration--;
//             timerCountdownElement.textContent = `${Math.floor(
//               duration / 60
//             )}:${(duration % 60).toString().padStart(2, "0")}`;
//           }
//         }, 1000);
//       };
//     });

//     // +++++ to server !!!! +++++

//     // const formData = new FormData();
//     // formData.append('voicemessage', voiceBlob);
//     // fetch('URL', {
//     //   method: 'POST',
//     //   body: formData
//     // }).then(response => {
//     //   if (response.ok) {
//     //     console.log('Voice message uploaded successfully');
//     //   } else {
//     //     console.error('Error uploading voice message');
//     //   }
//     // });

//     //    =======   обработка на сервере !!!!   =======

//     //   $uploadDir = 'voice/';
//     // $typeFile = explode('/', $_FILES['voice']['type']);
//     // $uploadFile = $uploadDir . basename(md5($_FILES['voice']['tmp_name'].time()).'.'.$typeFile[1]);
//     // if (move_uploaded_file($_FILES['voice']['tmp_name'], $uploadFile)) {
//     //     $response = ['result'=>'OK', 'data'=>'../'.$uploadFile];
//     // } else {
//     //     $response = ['result'=>'ERROR', 'data'=>''];
//     // }
//     // echo json_encode($response);
//   }
// });
