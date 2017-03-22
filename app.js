
var main = function () {
	"use strict";
	var toDos = [
		"Закончить писать эту книгу",
		"Вывести Грейси на прогулку в парк",
		"Ответить на электронные письма",
		"Подготовиться к лекции в понедельник",
		"Обновить несколько новых задач",
		"Купить продукты"
	];
	$(".tabs a span").toArray().forEach(function (element) {
		// создаем обработчик щелчков для этого элемента
		$(element).on("click", function () {
		var $element = $(element),
		$content;
		$(".tabs a span").removeClass("active");
		$element.addClass("active");
		$("main .content").empty();
		if ($element.parent().is(":nth-child(1)")) {
			$content = $("<ul>");
			var i;
			for (i = toDos.length-1; i>=0; i--) {
				$content.append($("<li>").text(toDos[i]));
			};
			$("main .content").append($content);
			console.log("Щелчок на первой вкладке!");
		} else if ($element.parent().is(":nth-child(2)")) {
		$content = $("<ul>");
		toDos.forEach(function (todo) {
			$content.append($("<li>").text(todo));
		});
		$("main .content").append($content);
		} else if ($element.parent().is(":nth-child(3)")) {
			console.log("Щелчок на третьей вкладке!");
		}
			return false;
		});
		$(".tabs a:first-child span").trigger("click");
	});
};
$(document).ready(main);