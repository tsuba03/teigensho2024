$(function() {
  $("#header").load("/gakuseichousa/2024/teigensho/_header/header.html");
  $("#footer").load("/gakuseichousa/2024/teigensho/_footer/footer.html");
    const opinion = createHeadline("学生の意見");
    const analysis = createHeadline("現状分析");
    const suggestion = createHeadline("提言");
    const summary = createHeadline("要望まとめ");
    $("#student-opinion").append(opinion);
    $("#analysis").append(analysis);
    $("#suggestion").append(suggestion);
    $("#opinion-summary").append(summary);

  });
