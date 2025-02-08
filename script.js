function selectMood(mood) {
    const questionsDiv = document.getElementById("questions");
    const nextStepDiv = document.getElementById("nextStep");
    questionsDiv.style.display = "block";
    nextStepDiv.style.display = "none"; // Hide next step initially
    questionsDiv.innerHTML = ""; // Clear previous content

    let question;
    let options;
    
    if (mood === "happy") {
        question = "What makes you happiest about us?";
        options = `
            <button class="option" onclick="showNextStep('memories')">our memories</button>
            <button class="option" onclick="showNextStep('talks')">our talks</button>
            <button class="option" onclick="showNextStep('future')">our future</button>
            <button class="option" onclick="showNextStep('everything')">everything</button>
        `;
    } else if (mood === "okay") {
        question = "What's something small that can make you smile?";
        options = `
            <button class="option" onclick="showNextStep('cuteText')">a cute text</button>
            <button class="option" onclick="showNextStep('meme')">a meme</button>
            <button class="option" onclick="showNextStep('warmHug')">a warm hug</button>
            <button class="option" onclick="showNextStep('goodSong')">a song to relate</button>
        `;
    } else if (mood === "tired") {
        question = "What helps you relax the most?";
        options = `
            <button class="option" onclick="showNextStep('music')">listening to music</button>
            <button class="option" onclick="showNextStep('cuddles')">cuddles</button>
            <button class="option" onclick="showNextStep('coldCoffee')">a cold coffee</button>
            <button class="option" onclick="showNextStep('sleeping')">sleeping</button>
        `;
    } else if (mood === "excited") {
        question = "What are you most excited about soon? (ik its tobe together)";
        options = `
            <button class="option" onclick="showNextStep('nineTea')">to see my cute face hot body (you 9t)</button>
            <button class="option" onclick="showNextStep('specialDate')">a special date</button>
            <button class="option" onclick="showNextStep('funTrip')">a fun trip</button>
            <button class="option" onclick="showNextStep('secret')">something secret shhhh</button>
        `;
    }

    // Display the question and options based on selected mood
    questionsDiv.innerHTML = `<p>${question}</p>` + options;
}



function showNextStep(option) {
    const questionsDiv = document.getElementById("questions");
    const nextStepDiv = document.getElementById("nextStep");
    questionsDiv.style.display = "block";
    nextStepDiv.style.display = "none"; // Hide next step
    questionsDiv.innerHTML = ""; // Clear previous content

    let mediaContent = null;

    // Define media content based on the selected option
    const mediaMap = {
        memories: "media/oldPicture.png",  // Remove the leading slash
        talks: "media/talk.png",
        future: "media/future.png",
        everything: "media/badhaaiHo.mp4",
        cuteText: "media/mindPPT.png",
        meme: "media/meme.mp4",
        warmHug: "media/warmHug.png",
        goodSong: "media/balh.m4a",
        cuddles: "media/cuddle.mp4",
        coldCoffee: "media/mapsColdCoffee.png",
        nineTea: "media/feelGood.jpg",
        specialDate: "media/specialDate.png",
        funTrip: "media/trips.png",
        secret: "media/tumhara.png",
        sleeping: "media/sleepingImage.jpeg"
    };


    if (mediaMap[option]) {
        mediaContent = mediaMap[option];
    }

    // Handle special case for "music"
    if (option === "music") {
        const playlist = [
            { title: "chill beats", link: "https://youtu.be/_ybTzGoNRjw?si=HoAegTf4sQ-UaQ0B&t=32" },
            { title: "romantic vibes", link: "https://youtu.be/MH_Q8YCS7CI?si=ZE0i_wKKArLZuwFb&t=11" },
            { title: "favourite(you)", link: "https://youtu.be/Feoea8FQTI0?si=AXEvCXBYlDEZ6Rka&t=15" },
            { title: "cozylazy day", link: "https://youtu.be/Cb6wuzOurPc?si=uHF-_B5W_uY1p52g&t=58" },
            { title: "bitter-sweet memories", link: "https://youtu.be/Whr3M4P2RKE?si=gNiSfncpmW3mWdSh&t=71" }
        ];

        // Create a heading
        const heading = document.createElement("p");
        heading.innerText = "Here’s a little playlist that will probably make you miss me even more... but but as you get lost in the melodies, you’ll feel just how deeply I have fallen for you. Will that bring you comfort with a gentle sense of reassurance /: ?";
        questionsDiv.appendChild(heading);

        // Create an unordered list for songs
        const ul = document.createElement("ul");
        ul.style.listStyleType = "none"; // Remove bullet points

        playlist.forEach(song => {
            const li = document.createElement("li");
            li.style.marginBottom = "8px"; // Add spacing between songs
            const a = document.createElement("a");
            a.href = song.link;
            a.innerText = song.title;
            a.target = "_blank"; // Open in a new tab
            li.appendChild(a);
            ul.appendChild(li);
        });

        questionsDiv.appendChild(ul);
    }
    // Handle special case for "coldCoffee"
    else if (option === "coldCoffee") {
        const message = document.createElement("p");
        message.innerText = "Here are some nearby coffee places, all rated 4.5 and above (according to Google). Let me know if you find something like the campus 3 one!";
        questionsDiv.appendChild(message);

        const img = document.createElement("img");
        img.src = mediaContent;
        img.style.maxWidth = "100%";
        img.style.height = "auto";
        questionsDiv.appendChild(img);
    }

    // Handle special case for "sleeping"
    else if (option === "sleeping") {
        const mess = document.createElement("p");
        mess.innerText = "Haan haan, go ahead and sleep -.- (crying inside coz ekbar bar bhi shakal nhi dekha), but first, complete the following:";
        questionsDiv.appendChild(mess);

        const img = document.createElement("img");
        img.src = mediaContent;
        img.style.maxWidth = "100%";
        img.style.height = "auto";
        questionsDiv.appendChild(img);

    } else if (mediaContent) {
        // Check for media type and apply resizing logic
        if (mediaContent.endsWith(".mp4")) {
            const video = document.createElement("video");
            video.src = mediaContent;
            video.controls = true;
            video.autoplay = true;
            
            video.style.width = "50%"; // Universal size for all mp4
            video.style.maxWidth = "800px"; // Ensures it doesn’t get too big
            video.style.height = "auto";
        
            questionsDiv.appendChild(video);
        }
        
        else if (mediaContent.endsWith(".mp3") || mediaContent.endsWith(".m4a")) {
            const audio = document.createElement("audio");
            audio.src = mediaContent;
            audio.controls = true;
            audio.autoplay = true;
            audio.style.width = "100%";  // Full width for audio player
        
            // Clear previous content and append the audio
            questionsDiv.appendChild(audio);
        }        
        
        else {
            const img = document.createElement("img");
            img.src = mediaContent;
            // img.style.height = "auto";
        
            // Ensure case-insensitive matching
            const lowerMediaContent = mediaContent.toLowerCase();
        
            // Resize images based on content type
            if (lowerMediaContent.includes("memories") || 
                lowerMediaContent.includes("talks") || 
                lowerMediaContent.includes("future") || 
                lowerMediaContent.includes("specialdate")) {
                img.style.width = "600px";
                img.style.maxWidth = "500px"; // Ensure it doesn't stretch beyond this
                img.style.height = "800px";
            } else {
                img.style.width = "1000px";  
                img.style.maxWidth = "1000px";
                img.style.height = "auto";
            }

            questionsDiv.appendChild(img);
        }
    }

    // Show the next step message
    nextStepDiv.style.display = "block";
    nextStepDiv.innerHTML = `
        <p>Oii Chowdhury!!! Are you there? I really want to ask you something. Can I?</p>
        <div class="buttons">
            <button class="yes" onclick="showValentinePage()">Haan bolo na jaan</button>
            <button class="notyet" onclick="showErrorMessage()">Not yet</button>
        </div>
    `;
}

function showErrorMessage() {
    alert("Try again next janam.");
}

function showValentinePage() {
    // Pause all audio and video elements on the page
    const videos = document.querySelectorAll('video');
    const audios = document.querySelectorAll('audio');

    // Pause all videos
    videos.forEach(video => video.pause());

    // Pause all audios
    audios.forEach(audio => audio.pause());

    // Hide other content if necessary
    document.getElementById("questions").style.display = "none";
    document.getElementById("nextStep").style.display = "none";

    // Create the Valentine’s page and make it fullscreen
    const valentineDiv = document.createElement('div');
    valentineDiv.style.position = "fixed";
    valentineDiv.style.top = "0";
    valentineDiv.style.left = "0";
    valentineDiv.style.width = "100%";
    valentineDiv.style.height = "100%";
    valentineDiv.style.backgroundColor = "#fce4ec";
    valentineDiv.style.display = "flex";
    valentineDiv.style.flexDirection = "column";
    valentineDiv.style.justifyContent = "center";
    valentineDiv.style.alignItems = "center";
    valentineDiv.style.zIndex = "9999"; // Ensures it is on top of everything else

    valentineDiv.innerHTML = `
        <h1 style="font-size: 50px; text-align: center;">Will you be my Valentine? ❤️</h1>
        <div class="buttons" style="display: flex; gap: 20px;">
            <button class="yes" onclick="sayYes()" style="padding: 15px 30px; font-size: 20px;">Yes</button>
            <button class="no" onmouseover="moveButton()" style="padding: 15px 30px; font-size: 20px;">No</button>
        </div>
        <p id="message" style="font-size: 25px; margin-top: 20px;"></p>
    `;

    document.body.appendChild(valentineDiv);
    
    // Add the audio element for background music
    const audio = new Audio("media/haanKiHaan.m4a"); 
    audio.autoplay = true;
    audio.loop = true;  // If you want the music to loop
    document.body.appendChild(audio);  // Append the audio to the body
}

function sayYes() {
    document.getElementById("message").innerText = "Aap aaj toh ekdum jadoo sa kr rhe ho! yayaya aami tomake bhalobashi too <3 <3 <3 !!!\n";
        
    // Pause all audio and video elements on the page
    const videos = document.querySelectorAll('video');
    const audios = document.querySelectorAll('audio');

    // Pause all videos
    videos.forEach(video => video.pause());
    
    // Pause all audios
    audios.forEach(audio => audio.pause());
    
    // Add the audio element for background music
    const audio = new Audio("media/youArePerfect.m4a");  // Replace with your actual audio file path
    audio.autoplay = true;
    audio.loop = true;  // If you want the music to loop
    document.body.appendChild(audio);  // Append the audio to the body

    // Create an image element
    const imageElement = document.createElement('img');
    imageElement.src = 'media/meriEntry.jpeg';  
    imageElement.alt = "Special Moment";
    imageElement.style.width = '500px';  // Adjust the size as needed
    imageElement.style.marginTop = '50px';  // Add some margin if needed

    // Append the image after the message
    document.getElementById("message").appendChild(imageElement);
}

function moveButton() {
    const noButton = document.querySelector(".no");
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Ensure that the button moves within the viewport's width and height
    const randomLeft = Math.random() * (windowWidth - noButton.offsetWidth); // Adjust for the button width
    const randomTop = Math.random() * (windowHeight - noButton.offsetHeight); // Adjust for the button height

    noButton.style.position = "absolute";
    noButton.style.left = randomLeft + "px";
    noButton.style.top = randomTop + "px";
}
