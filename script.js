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
    howto: "",
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
    howto: "",
  },
  {
    workoutName: "Diamond Push Up On Knees",
    value: [0, 1, 1, 0, 0, 0],
    workoutPic:
      "https://images.squarespace-cdn.com/content/v1/5e24ef5fd5824c71389c778e/1606358807042-INSECD6IZD8L5VQJH2IN/diamond-pushups-knees.gif",
    intensityLevel: "Beginner",
    targetedMuscles: "Chest, Triceps",
    workoutLink: "https://www.youtube.com/watch?v=R6iSgwPqFNU",
    howto: "",
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
    howto: "",
  },
  {
    workoutName: "Lying Knee Tucks",
    value: [0, 0, 0, 0, 0, 1],
    workoutPic:
      "https://whitecoattrainer.com/wp-content/uploads/2020/09/abs-lying-bent-knee-raises-1024x1024.webp",
    intensityLevel: "Beginner",
    targetedMuscles: "Abdominals",
    workoutLink: "https://www.youtube.com/watch?v=V95h0UX8UyI",
    howto: "",
  },
  {
    workoutName: "Straight Leg Raises",
    value: [0, 0, 0, 0, 0, 1],
    workoutPic:
      "https://thumbs.gfycat.com/BlackandwhiteLeanDogwoodtwigborer-max-1mb.gif",
    intensityLevel: "Beginner",
    targetedMuscles: "Abdominals",
    workoutLink: "https://www.spotebi.com/exercise-guide/straight-leg-raise/",
    howto: "",
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
    workoutLink: "https://www.youtube.com/watch?v=fSoigipsZM8",
    howto: "",
  },
  {
    workoutName: "Pseudo Planche Push Up",
    value: [1, 1, 1, 1, 0, 1],
    workoutPic:
      "https://media.tenor.com/ma1RKic-SX0AAAAd/pseudo-planche-pushup-planche-pushup.gif",
    intensityLevel: "Intermediate",
    targetedMuscles: "Shoulders, Chest, Triceps, Biceps, Abdominals",
    workoutLink: "https://www.youtube.com/watch?v=C-SML6xnVkI",
    howto: "",
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
    howto: "",
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
    howto: "",
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
    howto: "",
  },
  {
    workoutName: "Decline Plank",
    value: [1, 0, 0, 0, 0, 1],
    workoutPic:
      "https://fitstop24.com/media/feet-elevated-decline-plank_1.jpg.400x330_q95_crop-%2C_filters-detail.jpg",
    intensityLevel: "Intermediate",
    targetedMuscles: "Shoulders, Abdominals",
    workoutLink: "https://www.youtube.com/watch?v=hCM8qYHen0Y",
    howto: "",
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
      "Assume a Downward Dog position, then lift your head slightly so you’re looking at the ground instead of your feet.",
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
    howto: "",
  },
  {
    workoutName: "Single Leg Push Up",
    value: [1, 1, 1, 0, 0, 0],
    workoutPic:
      "https://thumbs.gfycat.com/DapperSpicyApatosaur-size_restricted.gif",
    intensityLevel: "Advanced",
    targetedMuscles: "Shoulders, Chest, Triceps",
    workoutLink:
      "https://www.fitliferegime.com/best-push-ups-for-chest/#13-single-leg-push-up",
    howto: "",
  },
  {
    workoutName: "One Arm Push Up",
    value: [1, 1, 1, 1, 0, 1],
    workoutPic:
      "https://thumbs.gfycat.com/RemoteSizzlingGilamonster-max-1mb.gif",
    intensityLevel: "Advanced",
    targetedMuscles: "Shoulders, Chest, Triceps, Biceps, Abdominals",
    workoutLink:
      "https://www.fitliferegime.com/best-push-ups-for-chest/#14-one-arm-push-up",
    howto: "",
  },
  {
    workoutName: "L-Sit",
    value: [1, 0, 1, 0, 0, 1],
    workoutPic: "https://gmb.io/wp-content/uploads/2017/09/Ryan-Lsit.jpg",
    intensityLevel: "Advanced",
    targetedMuscles: "Shoulders, Triceps, Abdominals",
    workoutLink:
      "https://www.shape.com/fitness/tips/how-to-l-sit-exercise#toc-how-to-do-an-l-sit",
    howto: "",
  },
  {
    workoutName: "Dips",
    value: [1, 0, 1, 0, 0, 0],
    workoutPic: "https://thumbs.gfycat.com/CompleteZigzagFossa-max-1mb.gif",
    intensityLevel: "Advanced",
    targetedMuscles: "Shoulders, Triceps",
    workoutLink: "https://www.youtube.com/watch?v=v4hLzeiK-6M",
    howto: "",
  },
  {
    workoutName: "Narrow Push Up",
    value: [0, 1, 1, 0, 0, 0],
    workoutPic:
      "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/closehandspushup-1456956569.gif",
    intensityLevel: "Advanced",
    targetedMuscles: "Chest, Triceps",
    workoutLink: "https://www.youtube.com/watch?v=FtxezcfMahg",
    howto: "",
  },
  {
    workoutName: "Dragon Flag Negatives",
    value: [0, 0, 0, 0, 0, 1],
    workoutPic:
      "https://post.greatist.com/wp-content/uploads/sites/2/2022/01/GRT-12.01.DragonFlag.gif",
    intensityLevel: "Advanced",
    targetedMuscles: "Abdominals",
    workoutLink: "https://www.youtube.com/watch?v=4422pnYNyng",
    howto: "",
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
      "https://www.verywellfit.com/how-to-do-the-bridge-exercise-3120738#toc-how-to-do-the-bridge-exercise",
    howto: "",
  },
  {
    workoutName: "Supported Squat",
    value: [1, 1, 1, 0],
    workoutPic:
      "https://www.adlsmartcare.co.uk/adlsmartcare/Upload/products/Squat_M.gif",
    intensityLevel: "Beginner",
    targetedMuscles: "Glutes, Quadriceps, Hamstrings",
    workoutLink: "https://www.youtube.com/watch?v=O934_wamlGk",
    howto: "",
  },
  {
    workoutName: "Jackknife Squat",
    value: [1, 1, 1, 0],
    workoutPic:
      "https://fitbodyhome.com/wp-content/uploads/2020/05/Jackknife-squat.webp",
    intensityLevel: "Beginner",
    targetedMuscles: "Glutes, Quadriceps, Hamstrings",
    workoutLink: "https://www.youtube.com/watch?app=desktop&v=WUj7b6kWAms",
    howto: "",
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
    howto: "",
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
    howto: "",
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
    howto: "",
  },
];

// 6
const intermediateLowerBodyWorkouts = [
  {
    workoutName: "Walking Lunge",
    value: [1, 1, 1, 1],
    workoutPic:
      "https://i0.wp.com/thumbs.gfycat.com/AltruisticFantasticCub-size_restricted.gif?w=1155&h=840",
    intensityLevel: "Intermediate",
    targetedMuscles: "Glutes, Quadriceps, Hamstrings, Calves",
    workoutLink:
      "https://www.verywellfit.com/how-to-do-walking-lunges-4588048#toc-how-to-do-walking-lunges",
    howto: "",
  },
  {
    workoutName: "Close Squat",
    value: [1, 1, 1, 1],
    workoutPic: "https://cstwiki.wtb.tue.nl/images/Narrow-Squat-Stance.gif",
    intensityLevel: "Intermediate",
    targetedMuscles: "Glutes, Quadriceps, Hamstrings, Calves",
    workoutLink: "https://www.youtube.com/watch?v=HTnH3QxN0D4",
    howto: "",
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
    howto: "",
  },
  {
    workoutName: "Jumping Lunges",
    value: [1, 1, 1, 1],
    workoutPic:
      "https://media.self.com/photos/57d883bef71ce8751f6b46a8/master/w_1600%2Cc_limit/Jumping_Lunge.gif",
    intensityLevel: "Intermediate",
    targetedMuscles: "Glutes, Quadriceps, Hamstrings, Calves",
    workoutLink:
      "https://www.healthline.com/health/jumping-lunges#how-to-do-it",
    howto: "",
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
    howto: "",
  },
  {
    workoutName: "Elevated Hip Thrust",
    value: [1, 0, 1, 0],
    workoutPic:
      "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/hipthrustfeetelevateddynamic-1472219851.gif",
    intensityLevel: "Intermediate",
    targetedMuscles: "Glutes, Hamstrings",
    workoutLink:
      "(Hip Thrust Off Bench) https://www.healthline.com/health/fitness-exercise/hip-thrusts#variations-to-consider",
    howto: "",
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
    howto: "",
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
    howto: "",
  },
  {
    workoutName: "Jump Squat",
    value: [1, 1, 1, 1],
    workoutPic:
      "https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/02/HL-07.07.JumpSquats.gif?h=840",
    intensityLevel: "Advanced",
    targetedMuscles: "Glutes, Quadriceps, Hamstrings, Calves",
    workoutLink: "https://greatist.com/fitness/how-to-do-squat-jumps",
    howto: "",
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
    howto: "",
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
    howto: "",
  },
];

// checkbox checker
checkbox1.addEventListener("click", function () {
  if (checkbox1.checked) {
    upperBodyTargetMuscles[0] = 1;
  } else {
    upperBodyTargetMuscles[0] = 0;
  }
  console.log(upperBodyTargetMuscles);
});

checkbox2.addEventListener("click", function () {
  if (checkbox2.checked) {
    upperBodyTargetMuscles[1] = 1;
  } else {
    upperBodyTargetMuscles[1] = 0;
  }
  console.log(upperBodyTargetMuscles);
});

checkbox3.addEventListener("click", function () {
  if (checkbox3.checked) {
    upperBodyTargetMuscles[2] = 1;
  } else {
    upperBodyTargetMuscles[2] = 0;
  }
  console.log(upperBodyTargetMuscles);
});

checkbox4.addEventListener("click", function () {
  if (checkbox4.checked) {
    upperBodyTargetMuscles[3] = 1;
  } else {
    upperBodyTargetMuscles[3] = 0;
  }
  console.log(upperBodyTargetMuscles);
});

checkbox5.addEventListener("click", function () {
  if (checkbox5.checked) {
    upperBodyTargetMuscles[4] = 1;
  } else {
    upperBodyTargetMuscles[4] = 0;
  }
  console.log(upperBodyTargetMuscles);
});

checkbox6.addEventListener("click", function () {
  if (checkbox6.checked) {
    upperBodyTargetMuscles[5] = 1;
  } else {
    upperBodyTargetMuscles[5] = 0;
  }
  console.log(upperBodyTargetMuscles);
});

checkbox7.addEventListener("click", function () {
  if (checkbox7.checked) {
    lowerBodyTargetMuscles[0] = 1;
  } else {
    lowerBodyTargetMuscles[0] = 0;
  }
  console.log(lowerBodyTargetMuscles);
});

checkbox8.addEventListener("click", function () {
  if (checkbox8.checked) {
    lowerBodyTargetMuscles[1] = 1;
  } else {
    lowerBodyTargetMuscles[1] = 0;
  }
  console.log(lowerBodyTargetMuscles);
});

checkbox9.addEventListener("click", function () {
  if (checkbox9.checked) {
    lowerBodyTargetMuscles[2] = 1;
  } else {
    lowerBodyTargetMuscles[2] = 0;
  }
  console.log(lowerBodyTargetMuscles);
});

checkbox10.addEventListener("click", function () {
  if (checkbox10.checked) {
    lowerBodyTargetMuscles[3] = 1;
  } else {
    lowerBodyTargetMuscles[3] = 0;
  }
  console.log(lowerBodyTargetMuscles);
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
    // sample output : [workout name, value, workout pic, intensity level", target muscles, how to, value]
  }

  upperBodyWorkoutValues.sort((a, b) => {
    return b[6] - a[6];
  });
  console.log("After sort:", upperBodyWorkoutValues);
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
    // sample output : [workout name, value, workout pic, intensity level", target muscles, how to, value]
    console.log(lowerBodyWorkoutValues);
  }

  lowerBodyWorkoutValues.sort((a, b) => {
    return b[6] - a[6];
  });
  console.log("After sort:", lowerBodyWorkoutValues);
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
        console.log("Intensity level: Beginner");
        getBeginnerWorkouts();
      } else if (radio2.checked) {
        console.log("Intensity level: Intermediate");
        getIntermediateWorkouts();
      } else if (radio3.checked) {
        console.log("Intensity level: Advanced");
        getAdvancedWorkouts();
      }
      changeWorkoutsDisplayed();
    }
    console.log("*** generate() reached");
    console.log("------------------------------");
    console.log(workoutOutputs);
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
  console.log("*** getBeginnerWorkouts() reached");
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
  console.log("*** getIntermediateWorkouts() reached");
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
  console.log("*** getAdvancedWorkouts() reached");
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
    console.log("3 upper and 3 for lower");
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
    console.log("5 for upper");
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
    console.log("5 for lower");
  } else if (
    !upperBodyTargetMuscles.includes(1) &&
    !lowerBodyTargetMuscles.includes(1)
  ) {
    // no muscles have been selected
    console.log("no output");
  }

  console.log("*** changeWorkoutDisplayed() reached");
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
  intensityLevelInfo.innerHTML = `<strong>Intensity Level: </strong> ${workoutOutputs[num][3]}`;
  workoutNameInfo.innerHTML = `<strong>Workout Name: </strong> ${workoutOutputs[num][0]}`;
  targetedMusclesInfo.innerHTML = `<strong>Targeted Muscles: </strong> ${workoutOutputs[num][4]}`;
  workoutLinkInfo.innerHTML = `<strong>How to: </strong> <a href=${workoutOutputs[num][5]} target="_blank">${workoutOutputs[num][5]} </a>`;
};

document.addEventListener("keydown", function (e) {
  if (!workoutInfo.classList.contains("hidden") && e.key === "Escape") {
    closeWorkoutInfo();
  }
});
