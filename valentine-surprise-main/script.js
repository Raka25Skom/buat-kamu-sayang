document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bg-music");

    // Start music after user interaction (for autoplay restrictions)
    document.body.addEventListener("click", function () {
        if (audio.paused) {
            audio.play().catch(error => console.error("Autoplay blocked:", error));
        }
    }, { once: true });

    // Replace content when button is clicked
    document.getElementById("startButton").addEventListener("click", function () {
        let content = document.getElementById("content");

        // Clear everything inside the div and replace it with full content
        content.innerHTML = `
            <div class="envelope-wrapper">
                <div id="envelope" class="close">
                    <div class="front flap"></div>
                    <div class="front pocket"></div>
                    <div class="letter">
                        <p class="words line1">Aku bikin ini karena aku pengen ngasi sesuatu ke kamu</p>
                        <p class="words line2">pengen ngasih bunga tapi belum bisa :(</p>
                        <p class="words line3">jadi aku kasi ini dulu yaa sayang, semoga sukaa</p>
                        <p class="words line4">- your loving bf</p>
                    </div>
                </div>
            </div>
            <div class="continue">
                <button id="continue">Lanjut</button>
            </div>
        `;

        // Adding event listeners to Open and Continue buttons after content is loaded
        const envelope = document.getElementById("envelope");
        const btnContinue = document.getElementById("continue");

        // Open the envelope when clicked
        envelope.addEventListener("click", function () {
            envelope.classList.add("open");
            envelope.classList.remove("close");
        });

        // Continue button functionality to show question
        btnContinue.addEventListener("click", function () {
            content.innerHTML = `
			    <img src="pictures/what.gif" alt="asking tonton">
				
                <div class="question">
                    <p style="font-size: 24px;">Will you be my Valentine?</p>
                    <button id="yesBtn">Yes</button>
                    <button id="noBtn">No</button>
                </div>
            `;

            // Yes and No button event listeners
            const yesBtn = document.getElementById("yesBtn");
            const noBtn = document.getElementById("noBtn");
            const questionBox = document.querySelector(".question"); // Area batas untuk tombol "No"

            // "Yes" button functionality
            yesBtn.addEventListener("click", function () {
                content.innerHTML = `
					<div style="text-align: center;">
						<img src="pictures/love.gif" alt="Love GIF" style="display: block; margin: 0 auto;">
						<p style="font-size: 24px;">Yaaaaaay, makaciiii! I love you!</p>
					</div>
				
                    <div style="text-align: center; margin-top: 50px;">
                        <button id="surpriseBtn" style="padding: 12px 25px; font-size: 18px; background: #ffa500; color: white; border: none; cursor: pointer; border-radius: 5px;">Aku ada sesuatu nih</button>
                    </div>
                `;

                // Surprise button functionality
                document.getElementById("surpriseBtn").addEventListener("click", function () {
                    content.innerHTML = `
						<div style="text-align: center; margin-top: 20px;">
							<img src="pictures/Buat Pacarku.png" alt="Buat Pacarku Image" style="width: 70%; max-width: 500px; border-radius: 10px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); margin-bottom: 20px;">
							<br>
							<a id="downloadBtn" href="pictures/Buat Pacarku.png" download style="display: inline-block; padding: 12px 25px; background: #FF6863; color: white; border-radius: 5px; text-decoration: none; font-size: 18px; font-weight: bold; transition: 0.3s;">Download</a>
						</div>
					`;
                });
            });

            // **Perbaikan untuk tombol "No" agar tidak keluar halaman**
            noBtn.addEventListener("mouseover", function () {
                const parentBox = noBtn.offsetParent.getBoundingClientRect(); // Ambil batas parent
                const btnRect = noBtn.getBoundingClientRect(); // Ambil ukuran tombol "No"

                const padding = 20; // Supaya tombol tidak terlalu mepet ke tepi

                // Hitung batas gerakan tombol agar tidak keluar dari layar
                const maxX = parentBox.width - btnRect.width - padding;
                const maxY = parentBox.height - btnRect.height - padding;

                // Pastikan posisi tetap dalam batasan
                let newX = Math.random() * maxX;
                let newY = Math.random() * maxY;

                // Terapkan posisi baru
                noBtn.style.position = "absolute";
                noBtn.style.left = `${newX}px`;
                noBtn.style.top = `${newY}px`;
            });

        });
    });
});
