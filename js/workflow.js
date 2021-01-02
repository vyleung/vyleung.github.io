$("#CISCube").show();

$("#CISCube").click(function () {
  // if ($("#AudioInts, #AudioObs, #CodedTranscripts, #CurMeetings, #FieldNotes, #GORP, #RefSess, #Y2Transcripts").is(":visible")) {
  //
  //   $(".arrow1, #Participants, #Y1Data, #Y2Data, .arrow2, #AudioInts, #AudioObs, #CodedTranscripts, #CurMeetings, #FieldNotes, #GORP, #RefSess, #Y2Transcripts").toggle();
  // }
  // if ($(".audints1, .audints2a, .audints2b, .audints3, .audobs, .CMs, .RS1, .RS2, .Y2T1, .Y2T1a").is(":visible")) {
  //
  //   $(".arrow1, .audints1, .audints2a, .audints2b, .audints3, .audobs, .CMs, .RS1, .RS2, .Y2T1, .Y2T1a").toggle();
  // }
    $(".arrow1, .category1").toggle();
})

$("#Y2Data").click(function () {
  $(".arrow1, .category1, #AudioIntsArrow, .category2").toggle();
  $("#Y2DataArrow, #Y2Data").toggle();
})

$("#AudioInts").click(function () {
  $(".audints1b, .audints2a").toggle();
})

$("#VistaCOVIDInts").click(function () {
  $(".audints1b, .audints2b, .audints2c").toggle();
})

$("#SharedArtifacts").click(function () {
  $(".audints2b,  .audints3").toggle();
})

// $("#AudioObs").click(function () {
//   $(".audobs").toggle();
//   $(".arrow2, #AudioInts, #AudioObs, #CodedTranscripts, #CurMeetings, #FieldNotes, #GORP, #RefSess, #Y2Transcripts").toggle();
// })
//
// $("#CurMeetings").click(function () {
//   $(".CMs").toggle();
//
//   $(".arrow2, #AudioInts, #AudioObs, #CodedTranscripts, #CurMeetings, #FieldNotes, #GORP, #RefSess, #Y2Transcripts").toggle();
// })
//
// $("#RefSess").click(function () {
//   $(".RS1").toggle();
//
//   $(".arrow2, #AudioInts, #AudioObs, #CodedTranscripts, #CurMeetings, #FieldNotes, #GORP, #RefSess, #Y2Transcripts").toggle();
// })
//
// $("#RefSessProtocols").click(function () {
//   $(".RS2, #RefSessProtocolsArrow").toggle();
//
//   $(".arrow2c, #RefSessArtifacts, #RefSessAudio, #RefSessSC, #RefSessTranscripts").toggle();
// })
//
// $("#Y2Transcripts").click(function () {
//   $(".Y2T1, .Y2T2").toggle();
//
//   $(".arrow2, #AudioInts, #AudioObs, #CodedTranscripts, #CurMeetings, #FieldNotes, #GORP, #RefSess, #Y2Transcripts").toggle();
// })
//
// $("#IntTranscripts").click(function () {
//   $(".Y2T2a, #IntTranscriptsArrow").toggle();
//
//   $(".arrow2d, #PostIntsTranscripts, #PreIntsTranscripts, #SWInt1Transcripts, #SWInt2Transcripts").toggle();
// })
