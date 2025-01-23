# CI Тест
[![Build status](https://ci.appveyor.com/api/projects/status/83616wk99f171nb4?svg=true)](https://ci.appveyor.com/project/Natasha01013/ahj-hw2-task1-move-element)

# Домашнее задание к занятию "Работа с DOM"
## Задача 1. Перемещение элемента

### Легенда
Вы решили развлечься и реализовать некое подобие игры, где гномы (или другие существа), выскакивают из "отверстий" и по ним нужно бить молотком:  

![Video](https://github.com/netology-code/ahj-homeworks/blob/AHJ-50/dom/pic/GracefulMiniatureBustard-small.gif)  
Copyright gfycat.com  

### Описание
Соберите инфраструктуру проекта на базе Webpack, ESLint, Babel, Jest, Webpack Dev Server. 

Поскольку мы более гуманны, вам нужно реализовать лишь первую часть этой игры - перемещение объекта в DOM Tree .

Для этого самостоятельно разработайте игровое поле 4x4 и персонажа в виде картинки `img` (при загрузке страницы должен программно генерироваться и ставиться в рандомную позицию внутри игрового поля). С помощью функции `setInterval` запланируйте перемещение существующего объекта `img` в другое поле (алгоритм - рандомное перемещение, без перемещения в то же самое поле).  

Для картинки персонажа используйте следующую: 

![Image](https://github.com/netology-code/ahj-homeworks/blob/AHJ-50/dom/pic/goblin.png) 

Важно: не используйте `removeChild`! Проверьте, что будет, если `Node` изменить родителя. 

Всё должно собираться через Webpack (включая картинки и стили) и выкладываться на Github Pages через CI.  

В качестве результата пришлите проверяющему ссылку на ваш GitHub-проект. Не забудьте установить бейджик сборки.  