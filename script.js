"use strict";

const body = document.querySelector("body");

const workoutInfo = document.getElementById("workout-info");
const usersManual = document.getElementById("users-manual");
const fadeBackground = document.getElementById("fade-background");

const workoutInfoPic = document.getElementById("workout-info-pic");
const intensityLevelInfo = document.getElementById("intensity-level-info");
const workoutNameInfo = document.getElementById("workout-name-info");
const targetedMusclesInfo = document.getElementById("targeted-muscles-info");
const workoutLinkInfo = document.getElementById("workout-link-info");
const workoutHowToInfo = document.getElementById("workout-howto-info");

const checkbox1 = document.getElementById("muscle1");
const checkbox2 = document.getElementById("muscle2");
const checkbox3 = document.getElementById("muscle3");
const checkbox4 = document.getElementById("muscle4");
const checkbox5 = document.getElementById("muscle5");
const checkbox6 = document.getElementById("muscle6");
const checkbox7 = document.getElementById("muscle7");
const checkbox8 = document.getElementById("muscle8");
const checkbox9 = document.getElementById("muscle9");
const checkbox10 = document.getElementById("muscle10");

const radio1 = document.getElementById("beginner");
const radio2 = document.getElementById("intermediate");
const radio3 = document.getElementById("advanced");

const upperBodyTargetMuscles = [0, 0, 0, 0, 0, 0];
const lowerBodyTargetMuscles = [0, 0, 0, 0];

const upperBodyOutputs = 5;
const lowerBodyOutputs = 5;

// Upper Body Data
// value: [shoulders, chest, triceps, biceps, back, abdominals]
// 7
const beginnerUpperBodyWorkouts = [
  {
    workoutName: "Incline Push Up",
    value: [1, 1, 1, 0, 1, 0],
    workoutPic:
      "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/04/400x400_12-Pushup_Alternatives_to_Build_Size_and_Strength_Incline_Pushup.gif?h=840",
    intensityLevel: "Beginner",
    targetedMuscles: "Shoulders, Chest, Triceps, Back",
    workoutLink:
      "https://www.healthline.com/health/fitness/bodyweight-shoulder-exercises?fbclid=IwAR2yMt9dNfcpvQG--a-kBB_UbU4GE7YYMXRdot6-3VFIQzSTuWOvgXELNag",
    howto: [
      "Set up behind an elevated surface, like a bench or a couch. Place your hands about shoulder-width apart, and form a straight line with your body from head to heel.",
      "Keeping your neck neutral, begin to lower your chest down while keeping your elbows at a 45-degree angle.",
      "Lower down as far as you can go, then push back up to start.",
    ],
  },
  {
    workoutName: "Push Up",
    value: [1, 1, 1, 1, 1, 1],
    workoutPic:
      "https://hips.hearstapps.com/hmg-prod/images/766/fitgif-friday-pushup-slider-thumbnail-override-1515520802.gif",
    intensityLevel: "Beginner",
    targetedMuscles: "Shoulders, Chest, Triceps, Biceps, Back, Abdominals",
    workoutLink:
      "https://www.verywellfit.com/the-push-up-exercise-3120574#toc-how-to-do-a-push-up",
    howto: [
      "Contract your abs and tighten your core by pulling your belly button toward your spine.",
      "Inhale as you slowly bend your elbows and lower yourself to the floor, until your elbows are at a 90-degree angle.",
      "Exhale while contracting your chest muscles and pushing back up through your hands, returning to the start position.",
    ],
  },
  {
    workoutName: "Knee Push Up",
    value: [1, 1, 1, 1, 1, 1],
    workoutPic:
      "https://i0.wp.com/post.greatist.com/wp-content/uploads/sites/2/2020/08/GRT-1.17.RegularChestPushupOnKnees.gif?h=840",
    intensityLevel: "Beginner",
    targetedMuscles: "Shoulders, Chest, Triceps, Biceps, Back, Abdominals",
    workoutLink:
      "https://www.fitliferegime.com/best-push-ups-for-chest/#2-knee-push-up",
    howto: [
      "Kneel on the floor. Extend arms and put hands shoulder-width apart on the floor in front of you.",
      "To lower yourself, bend your elbows and bring your chest to the floor.",
      "Make sure your body is straight from your head to your knees.",
      "Raise your body to the starting position by pushing up with your arms.",
      "Repeat the desired number of repetitions.",
    ],
  },
  {
    workoutName: "Diamond Push Up On Knees",
    value: [0, 1, 1, 0, 0, 0],
    workoutPic:
      "https://images.squarespace-cdn.com/content/v1/5e24ef5fd5824c71389c778e/1606358807042-INSECD6IZD8L5VQJH2IN/diamond-pushups-knees.gif",
    intensityLevel: "Beginner",
    targetedMuscles: "Chest, Triceps",
    workoutLink:
      "https://www.skimble.com/exercises/1044-kneeling-diamond-push-ups-how-to-do-exercise",
    howto: [
      "Get into a kneeling push up position with your shoulders directly above your wrists.",
      "Place your hands close together so your thumbs and index fingers form a triangle on the floor.",
      "Perform push-ups with your hands in this position.",
    ],
  },
  {
    workoutName: "Plank",
    value: [1, 1, 1, 1, 1, 1],
    workoutPic:
      "https://www.shape.com/thmb/T2GyvzFah3XYR8_L8W16ANWBTXs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/low-plank-hold-b8a63da1ef844f00b6f6a21141ba1d87.jpg",
    intensityLevel: "Beginner",
    targetedMuscles: "Shoulders, Chest, Triceps, Biceps, Back, Abdominals",
    workoutLink:
      "https://www.healthline.com/health/fitness/what-muscles-do-planks-work#how-to-do-it",
    howto: [
      "Start by lying on your stomach (prone position) with your elbows and forearms at your side. Ensure your elbows and shoulders are aligned.",
      "Slowly lift your torso off the ground by pressing into your forearms and toes. Contract your core as you rise, maintain a neutral spine and neck (avoid hunching or looking up), and keep your pelvis tucked inward (shift your pelvis forward to prevent your butt from lifting).",
      "Hold this position for as long as you can maintain proper form.",
    ],
  },
  {
    workoutName: "Lying Knee Tucks",
    value: [0, 0, 0, 0, 0, 1],
    workoutPic:
      "https://whitecoattrainer.com/wp-content/uploads/2020/09/abs-lying-bent-knee-raises-1024x1024.webp",
    intensityLevel: "Beginner",
    targetedMuscles: "Abdominals",
    workoutLink:
      "https://www.muscleandstrength.com/exercises/lying-floor-knee-raise.html",
    howto: [
      "Lay supine in a relaxed position with your legs straight and your hands underneath your low back for support.",
      "Raise the knees toward your forehead while contracting your abdominals and exhaling.",
      "Once your abs are fully contracted and your knees are slightly above parallel, slowly lower your legs back to the starting position.",
    ],
  },
  {
    workoutName: "Straight Leg Raises",
    value: [0, 0, 0, 0, 0, 1],
    workoutPic:
      "https://thumbs.gfycat.com/BlackandwhiteLeanDogwoodtwigborer-max-1mb.gif",
    intensityLevel: "Beginner",
    targetedMuscles: "Abdominals",
    workoutLink: "https://www.spotebi.com/exercise-guide/straight-leg-raise/",
    howto: [
      "Lie on your back with your hands by your sides or underneath your glutes. Keep your legs straight or just slightly bent.",
      "Raise your legs until your body is in an L shape.",
      "Pause, lower both legs slowly and then return to the starting position.",
      "Repeat until set is complete.",
    ],
  },
];

// 8
const intermediateUpperBodyWorkouts = [
  {
    workoutName: "Plank to Alternating Pike",
    value: [1, 0, 0, 0, 0, 0],
    workoutPic: "https://s3assets.skimble.com/assets/1801457/image_iphone.jpg",
    intensityLevel: "Intermediate",
    targetedMuscles: "Shoulders",
    workoutLink:
      "https://www.healthline.com/health/fitness/bodyweight-shoulder-exercises?fbclid=IwAR2yMt9dNfcpvQG--a-kBB_UbU4GE7YYMXRdot6-3VFIQzSTuWOvgXELNag",
    howto: [
      "Complete a plank to Downward Dog.",
      "At the top of the movement, take your right hand and reach back to touch your left shin or foot, depending on your flexibility.",
      "Return to start, then repeat with the opposite hand.",
    ],
  },
  {
    workoutName: "Elbow to High Plank",
    value: [1, 0, 0, 0, 0, 0],
    workoutPic:
      "https://media.self.com/photos/5786a0b037680cf06108b09a/master/w_320%2Cc_limit/Plank_Ups-1.gif",
    intensityLevel: "Intermediate",
    targetedMuscles: "Shoulders",
    workoutLink:
      "https://www.healthline.com/health/fitness/bodyweight-shoulder-exercises?fbclid=IwAR2yMt9dNfcpvQG--a-kBB_UbU4GE7YYMXRdot6-3VFIQzSTuWOvgXELNag",
    howto: [
      "Start in an elbow plank: Your forearms should be on the ground, elbow stacked under shoulders. Your body should form a straight line from head to heels.",
      "Inhale and bring one palm to the ground, followed by the other, to push up into a high plank.",
      "Hold a high plank for 1 second.",
      "Return to a forearm plank.",
    ],
  },
  {
    workoutName: "Spiderman Push Up",
    value: [1, 1, 1, 0, 0, 1],
    workoutPic:
      "https://i.pinimg.com/originals/0b/17/27/0b17273cd162eebe9b484c9eab632ff9.gif",
    intensityLevel: "Intermediate",
    targetedMuscles: "Shoulders, Chest, Triceps, Abdominals",
    workoutLink:
      "https://www.menshealth.com/fitness/a20694607/spiderman-pushup/",
    howto: [
      "Start in pushup position, abs and glutes tight.",
      "Lower into a pushup, bringing your chest an inch from the ground.",
      "Pause in this position. Keeping your chest parallel to the ground, lift your right foot off the ground and drive right knee to touch your right elbow.",
      "Drive back up as you return your right leg to standard pushup position.",
    ],
  },
  {
    workoutName: "Pseudo Planche Push Up",
    value: [1, 1, 1, 1, 0, 1],
    workoutPic:
      "https://media.tenor.com/ma1RKic-SX0AAAAd/pseudo-planche-pushup-planche-pushup.gif",
    intensityLevel: "Intermediate",
    targetedMuscles: "Shoulders, Chest, Triceps, Biceps, Abdominals",
    workoutLink: "https://www.youtube.com/watch?v=C-SML6xnVkI",
    howto: [
      "Start in a straight-arm plank position, Rotate your hands to a 45-degree angle and lean forward so that your hands are underneath your hips.",
      "Keep your feet on the ground, pointing your toes so that you rest on the tops of your feet.",
      "Push your chest upward, then bend your elbows and lower your body to the floor.",
    ],
  },
  {
    workoutName: "Plank Ups",
    value: [1, 0, 1, 0, 1, 1],
    workoutPic:
      "https://media.self.com/photos/5c142bcd7cbe3657017f2e3a/master/w_320%2Cc_limit/plank-up-down-crystal.gif",
    intensityLevel: "Intermediate",
    targetedMuscles: "Shoulders, Triceps, Back, Abdominals",
    workoutLink:
      "https://www.masterclass.com/articles/plank-push-up-guide#WZyZXzWXpriAvsdONdXf4",
    howto: [
      "Get into a modified plank position by placing your forearms in contact with the floor. Your hips should be off the ground with your knees and toes in contact with the ground. Your elbows should be directly underneath your shoulders.",
      "Rotate your shoulders outward to engage your lats and pull your forearms toward your midsection to create tension. Squeeze your glutes and quads.",
      "Engage your core. Your ribs should be down and your pelvis should be slightly tucked. Your chin should remain tucked throughout the movement, as if you were holding an egg under your chin.",
      "Straighten your legs to lift your knees off of the ground so you end up in a full plank position. Your legs should be hip-width apart. All repetitions should begin from this starting position.",
      "While keeping your core engaged and maintaining full-body tension, slowly straighten one arm at a time to move into a push-up position.",
      "Slowly bend your arms one at a time, placing your forearms back on the floor to return to the plank position.",
      "Continue to alternate between the plank and push-up position for the desired number of repetitions.",
    ],
  },
  {
    workoutName: "Dive Bomber Push Up",
    value: [1, 1, 1, 0, 0, 0],
    workoutPic:
      "https://hips.hearstapps.com/hmg-prod/images/workouts/2017/09/under-the-fence-push-ups-1506433669.gif",
    intensityLevel: "Intermediate",
    targetedMuscles: "Shoulders, Chest, Triceps",
    workoutLink:
      "https://gymperson.com/triceps-workout-without-weights/#Dive_Bomber_Pushup",
    howto: [
      "Start with your toes and palms on the ground. Your body should be in the shape of an inverted V with your arms and legs extended and your hips raised.",
      "The idea is to move your torso in a U-shape leading with your head. To do this, you need to keep your hips up while bending your elbows slowly to bring your chest down. That's the first half of the U.",
      "Continue the U-shape by straightening your arms to push your chest up and forward while bringing your hips down. Try to draw a smooth half circle in the air with your body.",
      "Reverse the half circle as smoothly as possible until you're back in the original inverted-V position.",
    ],
  },
  {
    workoutName: "Side Plank",
    value: [1, 0, 0, 0, 0, 1],
    workoutPic:
      "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/10/GRT-Side-Plank.gif?h=840",
    intensityLevel: "Intermediate",
    targetedMuscles: "Shoulders, Abdominals",
    workoutLink:
      "https://www.healthline.com/health/side-plank#basic-side-plank",
    howto: [
      "Lie on your right side with your legs straight and feet stacked on top of each other. Place your right elbow under your right shoulder with your forearm pointing away from you and your hand balled into a fist. The pinky side of your hand should be in contact with the ground.",
      "With your neck neutral, breathe out and brace your core.",
      "Lift your hips off the mat so that you're supporting your weight on your elbow and the side of your right foot. Your body should be in a straight line from your ankles to your head.",
      "Repeat on your left side.",
    ],
  },
  {
    workoutName: "Decline Plank",
    value: [1, 0, 0, 0, 0, 1],
    workoutPic:
      "https://2.bp.blogspot.com/-0GmPJzRld48/UnAEWNAw1NI/AAAAAAAABhQ/EZ9c_aKyezM/s1600/decline+plank.JPG",
    intensityLevel: "Intermediate",
    targetedMuscles: "Shoulders, Abdominals",
    workoutLink: "https://www.youtube.com/watch?v=hCM8qYHen0Y",
    howto: [
      "Place a chair, box, or flat bench behind you.",
      "Now place your feet up on the chair so that only your toes are touching it and your forearms on the ground.",
      "Make your body into a straight line (plank position).",
      "Keeping your core tight the whole time hold this position for the desired amount of time.",
    ],
  },
];

// 9
const advancedUpperBodyWorkouts = [
  {
    workoutName: "Pike Push Up",
    value: [1, 1, 1, 0, 0, 0],
    workoutPic:
      "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/pikepushup-1456956895.gif",
    intensityLevel: "Advanced",
    targetedMuscles: "Shoulders, Chest, Triceps",
    workoutLink:
      "https://www.healthline.com/health/fitness/bodyweight-shoulder-exercises?fbclid=IwAR2yMt9dNfcpvQG--a-kBB_UbU4GE7YYMXRdot6-3VFIQzSTuWOvgXELNag",
    howto: [
      "Assume a Downward Dog position, then lift your head slightly so you're looking at the ground instead of your feet.",
      "Bend your elbows out to the side and begin to let your head lower toward the ground, dropping as far as you can.",
      "Push back up to start.",
    ],
  },
  {
    workoutName: "Side Plank with Leg Raises",
    value: [1, 0, 0, 0, 0, 1],
    workoutPic:
      "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/04/400x400_The_Best_Postpartum_Exercises_to_do_Right_Now_Side_Plank_Leg_Lifts.gif?h=840",
    intensityLevel: "Advanced",
    targetedMuscles: "Shoulders, Abdominals",
    workoutLink:
      "https://www.healthline.com/health/fitness/bodyweight-shoulder-exercises?fbclid=IwAR2yMt9dNfcpvQG--a-kBB_UbU4GE7YYMXRdot6-3VFIQzSTuWOvgXELNag",
    howto: [
      "Lie on your side with your bottom arm bent and your forearm on the ground with your hand in front of your body.",
      "Press into your forearm and lift your bottom hip off the ground to make a straight line from your foot to the crown of your head. Reach your other arm to the ceiling.",
      "If you can hold this position while keeping your chest open to the side, try lifting your top leg.",
      "Lower the leg and then lower the hips.",
      "Repeat on the other side.",
    ],
  },
  {
    workoutName: "Decline Push Up",
    value: [1, 1, 1, 1, 0, 1],
    workoutPic:
      "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/feetelevatedpushup-1457047025.gif?crop=1xw:0.75xh;center,top&resize=1200:*",
    intensityLevel: "Advanced",
    targetedMuscles: "Shoulders, Chest, Triceps, Biceps, Abdominals",
    workoutLink:
      "https://www.verywellfit.com/decline-push-ups-3120037#toc-how-to-do-a-decline-push-up",
    howto: [
      "Bend your elbows to lower your chest until it almost touches the floor, stopping once your elbows are at your ribcage. Maintain an aligned position and use a smooth, controlled motion. As you lower to the ground, look up slightly to allow full range of motion and avoid banging your nose or forehead on the ground. This position may make you want to arch your back but resist this temptation as doing so is not helpful and could set you up for an injury.",
      "Push up until your elbows are straight, but not locked, to return to the starting position.",
    ],
  },
  {
    workoutName: "Single Leg Push Up",
    value: [1, 1, 1, 0, 0, 0],
    workoutPic:
      "https://cdn.jefit.com/assets/img/exercises/gifs/1053.gif",
    intensityLevel: "Advanced",
    targetedMuscles: "Shoulders, Chest, Triceps",
    workoutLink:
      "https://www.fitliferegime.com/best-push-ups-for-chest/#13-single-leg-push-up",
    howto: [
      "Assume a standard push-up position, but place one foot on top of the other or one place one foot in the air straight behind you.",
      "Lower yourself by bending your elbows. Make sure your chest is close to the floor and your body is straight from head to toe. Lift one leg up in the air.",
      "Raise your body to the starting position by pushing up with your arms.",
      "Repeat the desired number of repetitions.",
      "Make sure to alternate legs in between sets or repetitions to create a symmetrical body.",
    ],
  },
  {
    workoutName: "One Arm Push Up",
    value: [1, 1, 1, 1, 0, 1],
    workoutPic:
      "https://media.giphy.com/media/PmLKIdw5HflJjY0r0y/giphy.gif",
    intensityLevel: "Advanced",
    targetedMuscles: "Shoulders, Chest, Triceps, Biceps, Abdominals",
    workoutLink:
      "https://www.fitliferegime.com/best-push-ups-for-chest/#14-one-arm-push-up",
    howto: [
      "Get in the standard push-up position. Place one hand on the ground directly beneath your chest and the other behind your lower back.",
      "To maintain balance, turn your torso slightly away from the pushing arm.",
      "Breathe in as you lower your angled torso to the ground until your chin is a few inches above the floor.",
      "Breathe out as you push yourself up from the floor.",
      "Stop just before you lock out your elbow at the top of the movement.",
    ],
  },
  {
    workoutName: "L-Sit",
    value: [1, 0, 1, 0, 0, 1],
    workoutPic: "https://gmb.io/wp-content/uploads/2017/09/Ryan-Lsit.jpg",
    intensityLevel: "Advanced",
    targetedMuscles: "Shoulders, Triceps, Abdominals",
    workoutLink:
      "https://www.shape.com/fitness/tips/how-to-l-sit-exercise#toc-how-to-do-an-l-sit",
    howto: [
      "If using two boxes, benches, or parallettes, set them up so that they are a little narrower than shoulder-width apart. Stand between them and place palms on each side, under shoulders.",
      "Straighten arms, lock elbows at sides, pull shoulder blades down and away from ears, and engage lats.",
      "Then, pushing down into palms, engage core and lift legs (straight and together) off the floor until parallel with (or close to parallel with) the floor.",
      "Hold, keeping knees straight, squeezing quads together tightly, pointing toes, and looking straight ahead to maintain neutral neck.",
    ],
  },
  {
    workoutName: "Dips",
    value: [1, 0, 1, 0, 0, 0],
    workoutPic: "https://thumbs.gfycat.com/CompleteZigzagFossa-max-1mb.gif",
    intensityLevel: "Advanced",
    targetedMuscles: "Shoulders, Triceps",
    workoutLink: "https://www.youtube.com/watch?v=v4hLzeiK-6M",
    howto: [
      "Position your hands shoulder-width apart on a weight bench, wall or chair.",
      "With your palms on the bench and knuckles pointed towards your feet, extend your legs in front of you.",
      "Push upwards to the starting position, then slowly lower your body until your elbows are at right angles.",
      "Keep your elbows as close to your body as possible and maintaining tension, hold for a second at the bottom of the movement.",
      "Press down into the bench to straighten your elbows and return to the starting position.",
    ],
  },
  {
    workoutName: "Narrow Push Up",
    value: [0, 1, 1, 0, 0, 0],
    workoutPic:
      "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/closehandspushup-1456956569.gif",
    intensityLevel: "Advanced",
    targetedMuscles: "Chest, Triceps",
    workoutLink: "https://www.youtube.com/watch?v=FtxezcfMahg",
    howto: [
      "Lie facedown on the floor with your hands flat on the floor inside shoulder widths; a narrower grip involves your triceps more. Keep your legs straight and press your toes into the floor. Hold your body straight, pull your abs in tight and focus your eyes on the floor.",
      "Powerfully press through your hands to raise your body off the floor. At the top, squeeze your chest, shoulders and triceps hard for a count before slowly lowering back to the start. Don't allow your body to rest on the floor; instead, when you're an inch or so away from the floor, pause and repeat.",
    ],
  },
  {
    workoutName: "Dragon Flag Negatives",
    value: [0, 0, 0, 0, 0, 1],
    workoutPic:
      "https://post.greatist.com/wp-content/uploads/sites/2/2022/01/GRT-12.01.DragonFlag.gif",
    intensityLevel: "Advanced",
    targetedMuscles: "Abdominals",
    workoutLink: "https://www.youtube.com/watch?v=4422pnYNyng",
    howto: [
      "Lie faceup on a bench or the floor.",
      "Reach your arms behind your head.",
      "Grab a bench, column, or pole to help you brace yourself.",
      "Activate your entire torso as you lift your hips and shift your weight to your shoulders.",
      "Drive your legs up, similar to the movement you’d use to do a reverse crunch, until they’re almost vertical.",
      "Keep your core tight and body straight, and try not to bend at your hips.",
      "Slowly lower your legs to create a straight line from shoulders to hips and toes.",
      "Balance your body weight on your shoulders as you hold the position.",
      "Release and repeat.",
    ],
  },
];

// Lower Body Data
// value: [glutes, quadriceps, hamstrings, calves]
// 6
const beginnerLowerBodyWorkouts = [
  {
    workoutName: "Glute Bridge",
    value: [1, 0, 1, 0],
    workoutPic:
      "https://media.tenor.com/i5B_Un9s7woAAAAC/glute-bridge-exercise.gif",
    intensityLevel: "Beginner",
    targetedMuscles: "Glutes, Hamstrings",
    workoutLink:
      "https://www.webmd.com/fitness-exercise/how-to-do-glute-bridge",
    howto: [
      "Lie on your back and set your knees about shoulder-width apart, with your feet flat to the ground and your knees bent. Make sure your toes are pointed straight forward and that your heels are 6–8 inches from your glutes. Lay your arms flat on either side of you with your palms open toward the ceiling.",
      "Slowly raise your hips, engage your glutes, and squeeze your abs.",
      "Be careful not to arch your back as you lift your hips as high as possible. A perfect glute bridge consists of elevating your hips until your torso makes a straight line from your shoulder up to your knee.",
      "Once you reach the top of the glute bridge, squeeze your glutes as tightly as possible and hold for a few seconds.",
      "Lower your hips back down to the ground in a controlled motion without releasing the tension in your abs and glutes.",
    ],
  },
  {
    workoutName: "Supported Squat",
    value: [1, 1, 1, 0],
    workoutPic:
      "https://www.adlsmartcare.co.uk/adlsmartcare/Upload/products/Squat_M.gif",
    intensityLevel: "Beginner",
    targetedMuscles: "Glutes, Quadriceps, Hamstrings",
    workoutLink:
      "https://www.makinglifeeasier.org.uk/assess/areas-of-help/area/Garden/2c6540c3-cebd-44a3-904f-adf5ca98679e/groups/a188c846-e689-43b2-95c4-1d9a3674b9ef/view/supported-squat#:~:text=Stand%20with%20your%20feet%20hip,up%20to%20the%20start%20position.",
    howto: [
      "Stand with your feet hip-width apart and hold a fixed surface such as a kitchen worktop.",
      "Bend your knees and push your bottom backwards, as though you were going to sit down.",
      "Try to keep your knees above your toes.",
      "Come back up to the start position.",
    ],
  },
  {
    workoutName: "Jackknife Squat",
    value: [1, 1, 1, 0],
    workoutPic:
      "https://fitbodyhome.com/wp-content/uploads/2020/05/Jackknife-squat.webp",
    intensityLevel: "Beginner",
    targetedMuscles: "Glutes, Quadriceps, Hamstrings",
    workoutLink: "https://www.youtube.com/watch?app=desktop&v=WUj7b6kWAms",
    howto: [
      "Stand in front of a stable platform around knee height.",
      "Maintaining straight legs, bend at the hips until your palms are on the platform. Your arms should be relatively straight, as should your waist.",
      "Squat down slowly, with a slightly forward lean so you may assist with your arms, until your hamstrings are pressed against your calves. You should not be able to squat any further.",
      "Pause for 1 Second.",
      "Slowly come back up.",
      "Pause for 1 Second.",
    ],
  },
  {
    workoutName: "Standing Calf Raise",
    value: [0, 0, 0, 1],
    workoutPic:
      "https://www.verywellfit.com/thmb/JyVlnkeXA-Fteaxs6j7WPENAYvE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/48-Standing-Calf-Raises-GIF-50e0467350804dddb4a9a15d6ee5d009.gif",
    intensityLevel: "Beginner",
    targetedMuscles: "Calves",
    workoutLink:
      "https://www.verywellfit.com/how-to-do-calf-raises-4801090#toc-how-to-do-a-standing-calf-raise",
    howto: [
      "Raise your heels slowly, keeping your knees extended (but not locked).",
      "Pause for one second when you're standing as much on the tips of your toes as you can.",
      "Lower your heels back to the ground, returning to the starting position. ",
    ],
  },
  {
    workoutName: "Hip Thrusts",
    value: [1, 0, 1, 0],
    workoutPic:
      "https://i0.wp.com/post.greatist.com/wp-content/uploads/sites/2/2022/05/400x400_24_Standing_Ab_Exercises_to_Strengthen_and_Define_Your_Core_Hip_Thrust.gif?w=1155&h=840",
    intensityLevel: "Beginner",
    targetedMuscles: "Glutes, Hamstrings",
    workoutLink:
      "https://greatist.com/move/bodyweight-butt-exercises?fbclid=IwAR1FQwKdXHV8_WEalZox4Td5y6YQeMiqUWVl7yyzX9Y5xuDTzlRA3_oKORo#beginner-moves",
    howto: [
      "Start seated on the floor with your knees bent and feet hip-width apart.",
      "Place your hands on the floor directly underneath your shoulders with your fingers facing away from your body.",
      "Squeeze your glutes and lift your hips into a tabletop position. Keep your neck long and don’t scrunch your shoulders.",
      "Hold for a count of 5.",
      "Slowly lower your hips to the floor.",
    ],
  },
  {
    workoutName: "Crabwalk",
    value: [1, 0, 1, 0],
    workoutPic:
      "https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/02/HL-07.03.Crabwalk-1.gif?h=840",
    intensityLevel: "Beginner",
    targetedMuscles: "Glutes, Hamstrings",
    workoutLink:
      "https://www.healthline.com/health/fitness/hamstring-exercises-bodyweight#beginner-exercises",
    howto: [
      "Sit on the floor with your knees bent and feet flat.",
      "Extend your arms behind you and place your hands on the floor with your fingers pointed toward you.",
      "Engage your core and lift your hips off the floor.",
      "Step forward simultaneously with your left foot and right hand. Next, step forward with your right foot and left hand. Continue this movement as far as you can in the space you’re in. Then, try going backward.",
    ],
  },
];

// 6
const intermediateLowerBodyWorkouts = [
  {
    workoutName: "Walking Lunge",
    value: [1, 1, 1, 1],
    workoutPic:
      "https://www.verywellfit.com/thmb/3vtqqwo7EMlLsrgZOsRVKkKm4Gc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/About-2A14-Lunges-928-f5d663f28f2d4fb592e21c46ee864476.gif",
    intensityLevel: "Intermediate",
    targetedMuscles: "Glutes, Quadriceps, Hamstrings, Calves",
    workoutLink:
      "https://www.verywellfit.com/how-to-do-walking-lunges-4588048#toc-how-to-do-walking-lunges",
    howto: [
      "Stand with your feet roughly hip-distance apart.",
      "Check your posture before starting—your torso should be upright and tall, core engaged, your shoulders back and chin lifted.",
      "Look straight ahead.",
      "Take a wide step forward with your right foot—plant it roughly two feet ahead, allowing your left heel to lift naturally as you step forward. You may want to put your hands on your hips, or you may want to swing your arms naturally—elbows bent at 90-degrees—as you take each step.",
      "Keep your core engaged and upright.",
      "Bend both knees and lower your back knee toward the floor. Stop just before it touches down. Breathe in during the lowering (or eccentric) phase of the exercise.",
      "Press firmly through your right heel and extend your right knee to rise to stand as you lift your left foot from the ground, swinging your left foot forward to plant it about two feet ahead of your right foot. Avoid leaning your torso forward from your hips as you take this step. Breathe out as you rise to stand (the concentric phase of the exercise).",
      "Continue stepping forward with each lunge, alternating sides as you do. If you find yourself losing balance as you walk, pause at the top of each lunge when your feet are next to each other. Gather your balance, then continue.",
      "Finish your set by bringing your back foot to meet your front foot on the final lunge.",
    ],
  },
  {
    workoutName: "Close Squat",
    value: [1, 1, 1, 1],
    workoutPic: "https://cstwiki.wtb.tue.nl/images/Narrow-Squat-Stance.gif",
    intensityLevel: "Intermediate",
    targetedMuscles: "Glutes, Quadriceps, Hamstrings, Calves",
    workoutLink: "https://www.youtube.com/watch?v=HTnH3QxN0D4",
    howto: [
      "Stand with your feet hip-width or closerm pull your shoulders down and back, and look straight ahead.",
      "Keeping your torso relatively upright, bend your knees, and squat down as far as you can without rounding your lower back or lifting your heels off the floor.",
      "Without bouncing at the bottom, stand back up and repeat.",
    ],
  },
  {
    workoutName: "Box Jumps",
    value: [1, 1, 1, 1],
    workoutPic:
      "https://post.healthline.com/wp-content/uploads/2020/07/Box-Jumps.gif",
    intensityLevel: "Intermediate",
    targetedMuscles: "Glutes, Quadriceps, Hamstrings, Calves",
    workoutLink:
      "https://www.healthline.com/health/fitness-exercise/box-jump#how-to",
    howto: [
      "Stand with the box one short step in front of you and your feet shoulder-width apart.",
      "Bend your knees slightly and drop down, bringing your arms out behind you.",
      "Use the momentum from your quarter squat to propel you upward as you jump onto the box, allowing your arms to swing out in front of you.",
      "Land softly on both feet with a slight bend in the knees.",
    ],
  },
  {
    workoutName: "Jumping Lunges",
    value: [1, 1, 1, 1],
    workoutPic:
      "https://media.self.com/photos/57d883bef71ce8751f6b46a8/master/w_1600%2Cc_limit/Jumping_Lunge.gif",
    intensityLevel: "Intermediate",
    targetedMuscles: "Glutes, Quadriceps, Hamstrings, Calves",
    workoutLink: "https://www.spotebi.com/exercise-guide/jumping-lunges/",
    howto: [
      "Take a large step backward and lower your hips, so that your back knee is just above the floor, and your front thigh is parallel to the floor.",
      "Jump into the air and switch leg positions.",
      "Jump again and return to the starting position.",
      "Repeat the exercise until set is complete.",
    ],
  },
  {
    workoutName: "Single Leg Hip Thrust",
    value: [1, 0, 0, 0],
    workoutPic:
      "https://hips.hearstapps.com/hmg-prod/images/workouts/2017/10/singleleghiphinge-1508249603.gif",
    intensityLevel: "Intermediate",
    targetedMuscles: "Glutes",
    workoutLink:
      "https://www.healthline.com/health/fitness/single-leg-hip-thrust#how-to-do-it",
    howto: [
      "Start by placing your upper back against a bench with one knee bent at about 90 degrees and the foot of the same leg flat on the floor — this will be your working leg.",
      "Lift your other leg, bending your knee until both your hip and knee form a 90-degree angle.",
      "Lay your arms out flat on the bench, or bend your elbows to rest your head in your hands. Focus on using your upper back as a pivot point as opposed to using your elbows to create force and drive the movement.",
      "Contract the glute of the working leg and lift your hips until they’re in line with your torso.",
      "Briefly hold this position while continuing to squeeze your glute, and finally, return to the starting position.",
    ],
  },
  {
    workoutName: "Elevated Hip Thrust",
    value: [1, 0, 1, 0],
    workoutPic:
      "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/hipthrustfeetelevateddynamic-1472219851.gif",
    intensityLevel: "Intermediate",
    targetedMuscles: "Glutes, Hamstrings",
    workoutLink:
      "https://www.menshealth.com/fitness/a20695016/elevated-hip-thrust/",
    howto: [
      "Lie faceup on the floor with your knees bent and your feet on a bench or box.",
      "Raise your hips until your body forms a straight line from your shoulders to your knees, then slowly lower to the starting position. ",
    ],
  },
];

// 5
const advancedLowerBodyWorkouts = [
  {
    workoutName: "One-Leg Squat",
    value: [1, 1, 1, 1],
    workoutPic:
      "https://images.squarespace-cdn.com/content/v1/54f9e84de4b0d13f30bba4cb/1533144491801-52N7XX5T4H9HNFODT90V/one+leg+squat.gif",
    intensityLevel: "Advanced",
    targetedMuscles: "Glutes, Quadriceps, Hamstrings, Calves",
    workoutLink:
      "https://www.healthline.com/health/exercise-fitness/single-leg-squat#how-to",
    howto: [
      "Start by standing on your right foot. Lift your left leg out and hold it out straight and slightly in front of your torso. You could also just bend your knee and keep your left leg elevated to start. Your arms can be by your side or out in front of you for balance.",
      "Keep your core engaged and your torso up throughout the movement. Start to push your hips back as you lower into a squat position. Aim to get low enough that your hips are parallel to the ground.",
      "Squeeze your glutes as you push into the right foot to stand back up. Try to keep your left leg up between reps.",
    ],
  },
  {
    workoutName: "One Leg Calf Raise",
    value: [0, 0, 0, 1],
    workoutPic:
      "https://artimg.gympik.com/articles/wp-content/uploads/2019/03/Single-Leg-Calf-Raises-at-Wall.gif",
    intensityLevel: "Advanced",
    targetedMuscles: "Calves",
    workoutLink:
      "https://www.fittr.com/exercise-videos/standing-single-leg-calf-raise",
    howto: [
      "While standing on your toe, slowly raise your heel and pause at the top for a second",
      "Make sure to keep the knee straight at all times",
      "Now lower your heel and stretch at the bottom",
      "Return to the starting position",
      "Repeat with the other leg.",
    ],
  },
  {
    workoutName: "Jump Squat",
    value: [1, 1, 1, 1],
    workoutPic:
      "https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/02/HL-07.07.JumpSquats.gif?h=840",
    intensityLevel: "Advanced",
    targetedMuscles: "Glutes, Quadriceps, Hamstrings, Calves",
    workoutLink: "https://greatist.com/fitness/how-to-do-squat-jumps",
    howto: [
      "Stand up straight, with feet slightly wider than shoulder-width apart.",
      "Squat until your thighs are just a bit higher than your knees.",
      "Drive through the balls of your feet to push yourself upward, straightening legs. (Try to get your feet to lift off the floor.)",
      "Land on the balls of your feet with soft, bent knees.",
      "Return to classic squat position.",
    ],
  },
  {
    workoutName: "Bulgarian Split Squat",
    value: [1, 1, 1, 1],
    workoutPic:
      "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/07/400x400_10_Deadlift_Alternatives_to_Suit_Your_Needs_Bulgarian_Split_Squat-1.gif?h=840",
    intensityLevel: "Advanced",
    targetedMuscles: "Glutes, Quadriceps, Hamstrings, Calves",
    workoutLink:
      "https://www.healthline.com/health/fitness-exercise/bulgarian-split-squat#how-to",
    howto: [
      "Start by standing about 2 feet in front of a knee-level bench or step.",
      "Lift your right leg up behind you and place the top of your foot on the bench. Your feet should still be about shoulder-width apart, and your right foot should be far enough in front of the bench where you can comfortably lunge — hop around a bit so you can find the right spot. If a closer foot position works, just ensure that when you lower down, your left knee doesn’t fall over the line of your toes.",
      "While engaging your core, roll your shoulders back and lean slightly forward at the waist, beginning to lower down on your left leg, bending the knee.",
      "If completing a quad-dominant Bulgarian split squat, stop before your knee falls over your toes. If completing a glute-dominant Bulgarian split squat, stop when your left thigh is parallel to the ground.",
      "Push up through your left foot, using the power from your quads and hamstrings to return to standing.",
    ],
  },
  {
    workoutName: "One-Leg Box Jumps",
    value: [1, 1, 1, 1],
    workoutPic:
      "https://cdn.shopify.com/s/files/1/1633/7705/files/bodyweight_explosive_leg_exercises_480x480.jpg?v=1607258056",
    intensityLevel: "Advanced",
    targetedMuscles: "Glutes, Quadriceps, Hamstrings, Calves",
    workoutLink:
      "https://www.masterclass.com/articles/single-leg-box-jump-guide#72twdsSvFYvxV1Fhzssywf",
    howto: [
      "Begin by standing around one foot length back from the box (one foot being the size of your foot!).",
      "Balance on to one leg, squat down and use your arms to jump up on to the box using one leg.",
      "Land as still as you can, hold the position for a second or two before standing tall and carefully stepping off the box.",
    ],
  },
];

// checkbox checker
checkbox1.addEventListener("click", function () {
  if (checkbox1.checked) {
    upperBodyTargetMuscles[0] = 1;
  } else {
    upperBodyTargetMuscles[0] = 0;
  }
});

checkbox2.addEventListener("click", function () {
  if (checkbox2.checked) {
    upperBodyTargetMuscles[1] = 1;
  } else {
    upperBodyTargetMuscles[1] = 0;
  }
});

checkbox3.addEventListener("click", function () {
  if (checkbox3.checked) {
    upperBodyTargetMuscles[2] = 1;
  } else {
    upperBodyTargetMuscles[2] = 0;
  }
});

checkbox4.addEventListener("click", function () {
  if (checkbox4.checked) {
    upperBodyTargetMuscles[3] = 1;
  } else {
    upperBodyTargetMuscles[3] = 0;
  }
});

checkbox5.addEventListener("click", function () {
  if (checkbox5.checked) {
    upperBodyTargetMuscles[4] = 1;
  } else {
    upperBodyTargetMuscles[4] = 0;
  }
});

checkbox6.addEventListener("click", function () {
  if (checkbox6.checked) {
    upperBodyTargetMuscles[5] = 1;
  } else {
    upperBodyTargetMuscles[5] = 0;
  }
});

checkbox7.addEventListener("click", function () {
  if (checkbox7.checked) {
    lowerBodyTargetMuscles[0] = 1;
  } else {
    lowerBodyTargetMuscles[0] = 0;
  }
});

checkbox8.addEventListener("click", function () {
  if (checkbox8.checked) {
    lowerBodyTargetMuscles[1] = 1;
  } else {
    lowerBodyTargetMuscles[1] = 0;
  }
});

checkbox9.addEventListener("click", function () {
  if (checkbox9.checked) {
    lowerBodyTargetMuscles[2] = 1;
  } else {
    lowerBodyTargetMuscles[2] = 0;
  }
});

checkbox10.addEventListener("click", function () {
  if (checkbox10.checked) {
    lowerBodyTargetMuscles[3] = 1;
  } else {
    lowerBodyTargetMuscles[3] = 0;
  }
});

let upperBodyWorkoutOutputs = [];
let lowerBodyWorkoutOutputs = [];
let workoutOutputs = [];

// changes object to array
const beginnerUpperBodyWorkoutsArr = [];
for (const workout of beginnerUpperBodyWorkouts) {
  beginnerUpperBodyWorkoutsArr.push(Object.values(workout));
}

const intermediateUpperBodyWorkoutsArr = [];
for (const workout of intermediateUpperBodyWorkouts) {
  intermediateUpperBodyWorkoutsArr.push(Object.values(workout));
}

const advancedUpperBodyWorkoutsArr = [];
for (const workout of advancedUpperBodyWorkouts) {
  advancedUpperBodyWorkoutsArr.push(Object.values(workout));
}

const beginnerLowerBodyWorkoutsArr = [];
for (const workout of beginnerLowerBodyWorkouts) {
  beginnerLowerBodyWorkoutsArr.push(Object.values(workout));
}

const intermediateLowerBodyWorkoutsArr = [];
for (const workout of intermediateLowerBodyWorkouts) {
  intermediateLowerBodyWorkoutsArr.push(Object.values(workout));
}

const advancedLowerBodyWorkoutsArr = [];
for (const workout of advancedLowerBodyWorkouts) {
  advancedLowerBodyWorkoutsArr.push(Object.values(workout));
}

const calcDotProduct = function (userTargetMuscles, dataTargetMuscles) {
  let dotProd = 0;
  // i[0] * j[0] + i[1] * j[1]...
  for (let i = 0; i < userTargetMuscles.length; i++) {
    dotProd += userTargetMuscles[i] * dataTargetMuscles[i];
  }
  return dotProd;
};

const calcMagnitude = function (mag) {
  let sumSquare = 0;
  for (let i = 0; i < mag.length; i++) {
    sumSquare += mag[i] ** 2;
  }
  const magnitude = Math.sqrt(sumSquare);
  return magnitude;
};

const calcCosineSimilarity = function (userTargetMuscles, workout) {
  const dotProduct = calcDotProduct(userTargetMuscles, workout);
  const userMagnitude = calcMagnitude(userTargetMuscles);
  const workoutMagnitude = calcMagnitude(workout);
  return dotProduct / (userMagnitude * workoutMagnitude);
};

const getCosineSimilarityUpper = function (userTargetMuscles, arr) {
  // resets the values inside so clicking generate won't put values inside again
  let upperBodyWorkoutValues = [];

  for (const workout of arr) {
    upperBodyWorkoutValues.push([
      ...workout,
      calcCosineSimilarity(userTargetMuscles, workout[1]),
    ]);
    // sample output : [workout name, value, workout pic, intensity level, target muscles, how to, value]
  }

  upperBodyWorkoutValues.sort((a, b) => {
    return b[7] - a[7];
  });

  return upperBodyWorkoutValues;
};

const getCosineSimilarityLower = function (userTargetMuscles, arr) {
  // resets the values inside so clicking generate won't put values inside again
  let lowerBodyWorkoutValues = [];

  for (const workout of arr) {
    lowerBodyWorkoutValues.push([
      ...workout,
      calcCosineSimilarity(userTargetMuscles, workout[1]),
    ]);
    // sample output : [workout name, value, workout pic, intensity level, target muscles, how to, value]
  }

  lowerBodyWorkoutValues.sort((a, b) => {
    return b[7] - a[7];
  });
  return lowerBodyWorkoutValues;
};

const getUpperWorkouts = function (arr) {
  upperBodyWorkoutOutputs = getCosineSimilarityUpper(
    upperBodyTargetMuscles,
    arr
  ).slice(0, upperBodyOutputs);
  return upperBodyWorkoutOutputs;
};

const getLowerWorkouts = function (arr) {
  lowerBodyWorkoutOutputs = getCosineSimilarityLower(
    lowerBodyTargetMuscles,
    arr
  ).slice(0, lowerBodyOutputs);
  return lowerBodyWorkoutOutputs;
};

const generate = function () {
  for (let i = 1; i <= 10; i++) {
    if (
      !document
        .getElementById(`workout-container-container-${i}`)
        .classList.contains("hidden")
    ) {
      document
        .getElementById(`workout-container-container-${i}`)
        .classList.add("hidden");
    }
  }
  document.getElementById("upper").classList.add("hidden");
  document.getElementById("lower").classList.add("hidden");

  setTimeout(() => {
    if (
      upperBodyTargetMuscles.includes(1) ||
      lowerBodyTargetMuscles.includes(1)
    ) {
      if (radio1.checked) {
        getBeginnerWorkouts();
      } else if (radio2.checked) {
        getIntermediateWorkouts();
      } else if (radio3.checked) {
        getAdvancedWorkouts();
      }
      changeWorkoutsDisplayed();
    }
  }, 100);
};

const getBeginnerWorkouts = function () {
  if (
    upperBodyTargetMuscles.includes(1) &&
    lowerBodyTargetMuscles.includes(1)
  ) {
    // both upper and lower muscles have been selected
    getUpperWorkouts(beginnerUpperBodyWorkoutsArr);
    getLowerWorkouts(beginnerLowerBodyWorkoutsArr);
  } else if (
    upperBodyTargetMuscles.includes(1) &&
    !lowerBodyTargetMuscles.includes(1)
  ) {
    // no lower muscles have been selected
    getUpperWorkouts(beginnerUpperBodyWorkoutsArr);
  } else if (
    !upperBodyTargetMuscles.includes(1) &&
    lowerBodyTargetMuscles.includes(1)
  ) {
    // no upper muscles have been selected
    getLowerWorkouts(beginnerLowerBodyWorkoutsArr);
  }
};

const getIntermediateWorkouts = function () {
  if (
    upperBodyTargetMuscles.includes(1) &&
    lowerBodyTargetMuscles.includes(1)
  ) {
    // both upper and lower muscles have been selected
    getUpperWorkouts(intermediateUpperBodyWorkoutsArr);
    getLowerWorkouts(intermediateLowerBodyWorkoutsArr);
  } else if (
    upperBodyTargetMuscles.includes(1) &&
    !lowerBodyTargetMuscles.includes(1)
  ) {
    // no lower muscles have been selected
    getUpperWorkouts(intermediateUpperBodyWorkoutsArr);
  } else if (
    !upperBodyTargetMuscles.includes(1) &&
    lowerBodyTargetMuscles.includes(1)
  ) {
    // no upper muscles have been selected
    getLowerWorkouts(intermediateLowerBodyWorkoutsArr);
  }
};

const getAdvancedWorkouts = function () {
  if (
    upperBodyTargetMuscles.includes(1) &&
    lowerBodyTargetMuscles.includes(1)
  ) {
    // both upper and lower muscles have been selected
    getUpperWorkouts(advancedUpperBodyWorkoutsArr);
    getLowerWorkouts(advancedLowerBodyWorkoutsArr);
  } else if (
    upperBodyTargetMuscles.includes(1) &&
    !lowerBodyTargetMuscles.includes(1)
  ) {
    // no lower muscles have been selected
    getUpperWorkouts(advancedUpperBodyWorkoutsArr);
  } else if (
    !upperBodyTargetMuscles.includes(1) &&
    lowerBodyTargetMuscles.includes(1)
  ) {
    // no upper muscles have been selected
    getLowerWorkouts(advancedLowerBodyWorkoutsArr);
  }
};

const changeWorkoutsDisplayed = function () {
  workoutOutputs = [];

  if (
    upperBodyTargetMuscles.includes(1) &&
    lowerBodyTargetMuscles.includes(1)
  ) {
    // both upper and lower muscles have been selected
    workoutOutputs = upperBodyWorkoutOutputs
      .slice(0, upperBodyOutputs)
      .concat(lowerBodyWorkoutOutputs.slice(0, lowerBodyOutputs));

    for (const [
      index,
      [
        workoutName,
        value,
        workoutPic,
        intensityLevel,
        targetedMuscles,
        workoutLink,
        howto,
        cosSim,
      ],
    ] of workoutOutputs.entries()) {
      if (cosSim > 0) {
        document.getElementById(`workout${index + 1}`).src = workoutPic;
        document.getElementById(`workout${index + 1}`).alt = workoutName;
        document.getElementById(`workout-name-details-${index + 1}`).innerHTML =
          "<b>" + workoutName + "</b>";
        document.getElementById(
          `workout-targets-details-${index + 1}`
        ).innerHTML = "Targeted Muscles: <b>" + targetedMuscles + "</b>";

        document
          .getElementById(`workout-container-container-${index + 1}`)
          .classList.remove("hidden");
        document.getElementById("upper").classList.remove("hidden");
        document.getElementById("lower").classList.remove("hidden");
        document.getElementById("upper").innerHTML = "<b><u>UPPER BODY</b></u>";
      }
    }
  } else if (
    upperBodyTargetMuscles.includes(1) &&
    !lowerBodyTargetMuscles.includes(1)
  ) {
    // no lower muscles have been selected
    workoutOutputs = upperBodyWorkoutOutputs;

    for (const [
      index,
      [
        workoutName,
        value,
        workoutPic,
        intensityLevel,
        targetedMuscles,
        workoutLink,
        howto,
        cosSim,
      ],
    ] of workoutOutputs.entries()) {
      if (cosSim > 0) {
        document.getElementById(`workout${index + 1}`).src = workoutPic;
        document.getElementById(`workout${index + 1}`).alt = workoutName;
        document.getElementById(`workout-name-details-${index + 1}`).innerHTML =
          "<b>" + workoutName + "</b>";
        document.getElementById(
          `workout-targets-details-${index + 1}`
        ).innerHTML = "Targeted Muscles: <b>" + targetedMuscles + "</b>";

        document
          .getElementById(`workout-container-container-${index + 1}`)
          .classList.remove("hidden");
        document.getElementById("upper").innerHTML = "<b><u>UPPER BODY</b></u>";
        document.getElementById("upper").classList.remove("hidden");
      }
    }
  } else if (
    !upperBodyTargetMuscles.includes(1) &&
    lowerBodyTargetMuscles.includes(1)
  ) {
    // no upper muscles have been selected
    workoutOutputs = lowerBodyWorkoutOutputs;
    for (const [
      index,
      [
        workoutName,
        value,
        workoutPic,
        intensityLevel,
        targetedMuscles,
        workoutLink,
        howto,
        cosSim,
      ],
    ] of workoutOutputs.entries()) {
      if (cosSim > 0) {
        document.getElementById(`workout${index + 1}`).src = workoutPic;
        document.getElementById(`workout${index + 1}`).alt = workoutName;
        document.getElementById(`workout-name-details-${index + 1}`).innerHTML =
          "<b>" + workoutName + "</b>";
        document.getElementById(
          `workout-targets-details-${index + 1}`
        ).innerHTML = "Targeted Muscles: <b>" + targetedMuscles + "</b>";

        document
          .getElementById(`workout-container-container-${index + 1}`)
          .classList.remove("hidden");
        document.getElementById("upper").classList.remove("hidden");
        document.getElementById("upper").innerHTML = "<b><u>LOWER BODY</b></u>";
      }
    }
  } else if (
    !upperBodyTargetMuscles.includes(1) &&
    !lowerBodyTargetMuscles.includes(1)
  ) {
    // no muscles have been selected
  }
};

const openWorkoutInfo = function (num) {
  workoutInfo.classList.remove("hidden");
  fadeBackground.classList.remove("hidden");
  body.style.overflow = "hidden";
  displayWorkoutInfo(num);
};

const openUsersManual = function (num) {
  usersManual.classList.remove("hidden");
  fadeBackground.classList.remove("hidden");
  body.style.overflow = "hidden";
};

const closeWorkoutInfo = function () {
  workoutInfo.classList.add("hidden");
  usersManual.classList.add("hidden");
  fadeBackground.classList.add("hidden");
  body.style.overflow = "auto";
};

const displayWorkoutInfo = function (num) {
  workoutInfoPic.src = workoutOutputs[num][2];
  workoutInfoPic.alt = workoutOutputs[num][0];

  let workoutHowTo = ``;
  for (let i = 0; i < workoutOutputs[num][6].length; i++) {
    workoutHowTo += `<li> ${workoutOutputs[num][6][i]} </li></br>`;
  }

  intensityLevelInfo.innerHTML = `<strong>Intensity Level: </strong> ${workoutOutputs[num][3]}`;
  workoutNameInfo.innerHTML = `<strong>Workout Name: </strong> ${workoutOutputs[num][0]}`;
  targetedMusclesInfo.innerHTML = `<strong>Targeted Muscles: </strong> ${workoutOutputs[num][4]}`;
  workoutHowToInfo.innerHTML = `<strong>How To: </strong> <ol id="workout-howto"> ${workoutHowTo} </ol>`;
  workoutLinkInfo.innerHTML = `<strong>For more info: </strong> <a href=${workoutOutputs[num][5]} target="_blank">${workoutOutputs[num][5]} </a>`;
};

document.addEventListener("keydown", function (e) {
  if (!workoutInfo.classList.contains("hidden") && e.key === "Escape") {
    closeWorkoutInfo();
  }
});

document.querySelector("#workout1").src =
  "https://cdn.shopify.com/s/files/1/1633/7705/files/bodyweight_explosive_leg_exercises_480x480.jpg?v=1607258056";
