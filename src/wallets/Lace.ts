import { Api, SupportLevel } from "../system/Types";

export default {
  name: 'Lace',
  injectAs: 'lace',
  logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAiIGhlaWdodD0iNjkiIHZpZXdCb3g9IjAgMCA3MCA2OSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjc3NzYgMzAuNDg1MkMxMS40MjY4IDMxLjM3ODIgMTEuMTI0IDMyLjI4OTMgMTAuODcwMyAzMy4yMTQ1QzkuNzUwODkgMzcuMjk1OCA5LjU2MDMxIDQxLjU3NiAxMC4zMTI2IDQ1Ljc0MDVDMTAuMzQ4MiA0NS45NDc3IDEwLjM4ODEgNDYuMTU1OSAxMC40MzIzIDQ2LjM2MDhDMTAuNTkyIDQ3LjE0ODQgMTAuNzg4MyA0Ny45MzU5IDExLjAxNiA0OC43MDYyQzExLjI3MDUgNDkuNTY5MiAxMS41NzM3IDUwLjQzMjIgMTEuOTE3OCA1MS4yNzA1QzE0LjIzNDUgNTYuOTYwMyAxOC4zNTY2IDYxLjczMTIgMjMuNjQ5OCA2NC44NDk0QzI0Ljg5MDcgNjUuNTgxNiAyNi4xODc1IDY2LjIxNDcgMjcuNTI4MSA2Ni43NDI3QzMyLjU3MDUgNjguNzM2NiAzOC4wODIxIDY5LjIyOTcgNDMuMzk4MyA2OC4xNjI0QzQ4LjcxNDYgNjcuMDk1MSA1My42MDg3IDY0LjUxMjkgNTcuNDkwOCA2MC43MjczQzU5LjkzMjggNTguMzQ2NiA2MS45MTQzIDU1LjUzNTYgNjMuMzM1OCA1Mi40MzU2QzYzLjA5MzQgNTIuNjkxNiA2Mi44NDUzIDUyLjk0MzMgNjIuNTkxNCA1My4xOTA3QzU4LjQ4MzggNTcuMjIzNCA1My4zMDkgNTkuOTk3OCA0Ny42NzY5IDYxLjE4NjhDNDcuNDIyMyA2MS4zMTIgNDcuMTYzNCA2MS40Mjc0IDQ2LjkwMjQgNjEuNTQxOEM0Mi45MjA5IDYzLjI2NjQgMzguNTI4NiA2My44MTM2IDM0LjI0NTcgNjMuMTE4NkMyOS45NjI4IDYyLjQyMzYgMjUuOTY4OSA2MC41MTU1IDIyLjczNzIgNTcuNjIwM0MyMi4zNjg5IDU3LjI5MDkgMjIuMDA5MyA1Ni45NDcxIDIxLjY1ODMgNTYuNTg5TDIxLjUwMDggNTYuNDIzOUMxOC4zMjM4IDUzLjEyMzIgMTYuMjI2NSA0OC45MzM4IDE1LjQ4NzYgNDQuNDEyNUMxNS40MjA3IDQ0LjAwOCAxNS4zNjQ2IDQzLjU5OCAxNS4zMTgyIDQzLjE4OTJDMTUuMjMwMyA0Mi4zNzQgMTUuMTg1NyA0MS41NTQ4IDE1LjE4NDQgNDAuNzM0OUMxNS4xNjY5IDM2LjI3NDUgMTYuNDY5OCAzMS45MDg2IDE4LjkyOSAyOC4xODczQzE5LjU0NzcgMjcuMjQ2NSAyMC4yMzczIDI2LjM1NDMgMjAuOTkxNiAyNS41MTg0QzIxLjMwODggMjUuMTY1NiAyMS42Mzg5IDI0LjgxMzkgMjEuOTg5NSAyNC40NzYyQzI2LjE1MTcgMjAuMzg0NyAzMS43MzU3IDE4LjA2MjggMzcuNTcxOCAxNy45OTY5QzM3LjY2MzUgMTcuOTk2OSAzNy43NjcgMTcuOTk2OSAzNy44NzE3IDE3Ljk5NjlIMzguMTEyM0MzOS4wNTk5IDE4LjAwNCA0MC4wMDYyIDE4LjA3MTcgNDAuOTQ1MiAxOC4xOTk3QzQ0LjkwMDIgMTguNzI3NSA0OC42NDMzIDIwLjI5OTIgNTEuNzg5MyAyMi43NTM0QzUxLjY1NTYgMjIuMjUzOSA1MS41MDEzIDIxLjc1NTUgNTEuMzI4NyAyMS4yNjQ2QzUxLjE5MTcgMjAuODc2MyA1MS4wNDYgMjAuNDk2NSA1MC44ODMxIDIwLjEyMTFDNDkuOTg0NyAxNy45NzE4IDQ4LjcyMTUgMTUuOTk0MSA0Ny4xNDk0IDE0LjI3NTFMNDcuMDU5OSAxNC4yMDZDNDUuNzM5NSAxMy43NDgyIDQ0LjM4NiAxMy4zOTI2IDQzLjAxMTEgMTMuMTQyM0MzNy43NjYzIDEyLjE3MjIgMzIuMzUzOSAxMi43MTA1IDI3LjQwMyAxNC42OTQ3QzI2LjY0NzggMTQuOTk3OSAyNS45MTIxIDE1LjMzMTIgMjUuMjE3MyAxNS42ODYxQzIzLjY4MzQgMTYuNDYyOSAyMi4yMjUxIDE3LjM4MDYgMjAuODYxMSAxOC40Mjc0TDIwLjczODEgMTguNTE5MUMxOS44NzUyIDE5LjE5MTkgMTkuMDUwNSAxOS45MTIyIDE4LjI2NzcgMjAuNjc2N0MxNi41MjEgMjIuMzg2NCAxNS4wMDYgMjQuMzE3NyAxMy43NjE1IDI2LjQyMTNDMTMuMDQ4MiAyNy42MjUzIDEyLjQyODIgMjguODgyMiAxMS45MDcgMzAuMTgwOUwxMS44OTMgMzAuNDg3M0wxMS43Nzc2IDMwLjQ4NTJaTTI4LjcwMTkgOS4yMDAzN0MyNy4wMTMgOS4yMDEyMSAyNS4zMjc3IDkuMzU2NDkgMjMuNjY3MSA5LjY2NDI1QzIzLjQ1MTMgOS43MDA5MyAyMy4yMzU2IDkuNzQwODUgMjMuMDI2MyA5Ljc4OTRDMjIuMjQ5NSA5Ljk0Nzk4IDIxLjQ2ODUgMTAuMTQ0MyAyMC42OTM5IDEwLjM3ODRDMjAuMjQxOSAxMC41MSAxOS43OTMxIDEwLjY1NjggMTkuMzQ3NSAxMC44MDk5QzE4LjkwMiAxMC45NjMxIDE4LjQ5MjEgMTEuMTIyOCAxOC4wNjkyIDExLjI5NDNDMTIuMzY0NSAxMy41OTM0IDcuNTg5MDUgMTcuNzI4NSA0LjQ5NzgyIDIzLjA0NTdDNC4xMDQwNiAyMy43MTQ2IDMuNzI5NzEgMjQuNDE5MSAzLjM4NDQ5IDI1LjEzODZDMy4xMTE1NiAyNS43MTA0IDIuODU0OCAyNi4yOTI5IDIuNjIyODYgMjYuODc1NUMtMC4wMDU0MDExMyAzMy40NzY0IC0wLjAyODg1NzUgNDAuODI5MSAyLjU1NzIzIDQ3LjQ0NjZDNS4xNDMzMiA1NC4wNjQxIDEwLjE0NiA1OS40NTI2IDE2LjU1MzUgNjIuNTIyNEMxNi42ODI5IDYyLjU4NSAxNi44MTI0IDYyLjY0NTQgMTYuOTQxOCA2Mi43MDQ3QzE2LjY4MjkgNjIuNDU4NyAxNi40MjggNjIuMjA3IDE2LjE3NjkgNjEuOTQ5NUMxMi4xNDE4IDU3LjgzNTIgOS4zNjYzNSA1Mi42NTM1IDguMTc3NjIgNDcuMDE0NkM4LjA2OTc0IDQ2LjgyMzYgNy45MzcwNSA0Ni41MzI0IDcuODA4NjcgNDYuMjMxNEM3LjYwMzcgNDUuNzYyMSA3LjQxODE0IDQ1LjI3OTkgNy4yNDQ0NSA0NC43ODlDNi4yNTEyMyA0MS45NzY4IDUuODIyODcgMzguOTk2MiA1Ljk4MzkzIDM2LjAxODFDNi4xNDQ5OSAzMy4wNCA2Ljg5MjMgMzAuMTIzIDguMTgzMDEgMjcuNDM0M0M4LjYyMTY4IDI2LjUxODQgOS4xMTkzNCAyNS42MzE5IDkuNjcyODQgMjQuNzgwNEMxMC4yOTU1IDIzLjgyNyAxMC45OTAxIDIyLjkyMjUgMTEuNzUwNiAyMi4wNzQ4QzEyLjEzMTQgMjEuNjQzMyAxMi41MjUyIDIxLjIzNzcgMTIuOTM3MyAyMC44NDM5QzEzLjcwNzcgMjAuMTAwOCAxNC41MzIgMTkuNDE1NyAxNS40MDM0IDE4Ljc5NDJDMTYuNzM5MSAxNy44Mzk4IDE4LjE3NDQgMTcuMDMzMiAxOS42ODQxIDE2LjM4ODRDMjMuMjE5IDEzLjY5NzQgMjcuMzE2MiAxMS44Mzk4IDMxLjY2OTYgMTAuOTU0NUMzMy4yODQgMTAuNjE4OCAzNC45MjMyIDEwLjQxNTcgMzYuNTcwNyAxMC4zNDcxTDM2LjE5NzQgMTAuMjM5M0MzMy43NiA5LjU1MDA5IDMxLjIzOTEgOS4yMDA1IDI4LjcwNjIgOS4yMDAzN0gyOC43MDE5Wk0zMy40NjU5IDU4LjM4MDlDMzMuNTg1NiA1OC40MTY1IDMzLjcwNTMgNTguNDQ5OSAzMy44MjUxIDU4LjQ4MjNDMzcuOTAzOSA1OS42MDgxIDQyLjE4MzUgNTkuODAzMSA0Ni4zNDc4IDU5LjA1M0w0Ni40NTU3IDU5LjAzMTRDNDYuNjQwMiA1OC45OTc5IDQ2LjgyNzkgNTguOTY0NSA0Ny4wMTM1IDU4LjkyMzVDNDcuNzc5NCA1OC43NjkyIDQ4LjUzNDYgNTguNTc4MyA0OS4zMzgzIDU4LjMzODhDNTAuMTQyIDU4LjA5OTMgNTAuOTM5MiA1Ny44Mjg1IDUxLjc0OTQgNTcuNTA3TDUyLjAyMjQgNTcuODc4MUw1MS44NTUxIDU3LjQ2MjhDNTUuMjQ1NyA1Ni4wOTY4IDU4LjMzMzMgNTQuMDc1IDYwLjk0MDggNTEuNTEzMkM2Mi42ODk4IDQ5LjgwMSA2NC4yMDc2IDQ3Ljg2NzYgNjUuNDU1NiA0NS43NjIxQzY2LjE3NzggNDQuNTM4MiA2Ni44MDQzIDQzLjI2MDQgNjcuMzI5NSA0MS45Mzk5QzY5LjM1NzEgMzYuODg5NCA2OS44NzE3IDMxLjM1ODIgNjguODEwNSAyNi4wMjA0QzY3Ljc0OTMgMjAuNjgyNiA2NS4xNTgyIDE1Ljc2ODggNjEuMzUyOSAxMS44NzhDNTguOTggOS40NDcgNTYuMTgwOCA3LjQ3MjQxIDUzLjA5NDcgNi4wNTI0MkM1Ni41NTE2IDkuMzUzODcgNTkuMTc4MiAxMy40MjY2IDYwLjc1OTYgMTcuOTM3NkM2MS4yMDEgMTkuMTkyNiA2MS41NjE0IDIwLjQ3NDcgNjEuODM4NCAyMS43NzZDNjEuOTM4NyAyMS45NTk0IDYyLjA3MDMgMjIuMjQ3NCA2Mi4xOTMzIDIyLjUzMTFDNjIuOTEwOCAyNC4yMSA2My40MjMgMjUuOTY5MyA2My43MTg3IDI3Ljc3MDlDNjMuOTI0NyAyOS4wMDA1IDY0LjAzMDQgMzAuMjQ0OSA2NC4wMzQ4IDMxLjQ5MTdDNjQuMDQ0OCAzNS45NDA2IDYyLjc0MjMgNDAuMjkzNiA2MC4yOTAzIDQ0LjAwNThDNTkuNjczMSA0NC45NDczIDU4Ljk4MzQgNDUuODM5MyA1OC4yMjc2IDQ2LjY3MzdDNTcuOTEwNSA0Ny4wMjc1IDU3LjU4MDMgNDcuMzc5MiA1Ny4yMjk3IDQ3LjcxNjlMNTcuMDY5IDQ3Ljg2OUM1NS4xMDUyIDQ5Ljc2MjcgNTIuODEzNiA1MS4yODM3IDUwLjMwNiA1Mi4zNTc5QzQ3Ljg0NzUgNTQuMjA0NyA0NS4xMTgyIDU1LjY2MDMgNDIuMjE1IDU2LjY3MzFDMzkuNDAxNCA1Ny42NjY5IDM2LjQ1NzMgNTguMjQyNyAzMy40NzY2IDU4LjM4MTlMMzMuNDY1OSA1OC4zODA5Wk0yMi44OTM2IDU0LjQ5NzJDMjQuMjE3MyA1NC45NjQ3IDI1LjU3NTggNTUuMzI3NiAyNi45NTY0IDU1LjU4MjVDMzAuNTMxOSA1Ni4yNTk4IDM0LjIwNTkgNTYuMjI1NCAzNy43NjgxIDU1LjQ4MUMzOS4wMDgzIDU1LjIyMjUgNDAuMjMgNTQuODgyMyA0MS40MjUzIDU0LjQ2MjdDNDEuODQ2IDU0LjMxNTkgNDIuMjYyNCA1NC4xNTYzIDQyLjY2OTEgNTMuOTkwMUM0My4zODQ0IDUzLjcwMjEgNDQuMDgxMyA1My4zODQ5IDQ0Ljc0NDcgNTMuMDQ4M0M0OS41NTUgNTAuNjM1NyA1My41NjE2IDQ2Ljg3ODcgNTYuMjc4MiA0Mi4yMzMzQzU2LjY2NzcgNDEuNTc0MiA1Ny4wNDIgNDAuODY5NyA1Ny4zOTI2IDQwLjEzNTFDNTcuNjU0OCAzOS41OTAzIDU3Ljg5NDMgMzkuMDM3OSA1OC4xMTg3IDM4LjQ4MjNMNTguMTUxIDM4LjM5NkM1OC41MjcyIDM3LjQ2NzYgNTguODUxMyAzNi41MTg5IDU5LjEyMiAzNS41NTQ1QzYwLjI3OTUgMzEuNDgxNyA2MC40Nzc0IDI3LjE5NiA1OS43MDAyIDIzLjAzMzlWMjMuMDIwOUM1OS42Njg5IDIyLjgxOTIgNTkuNjI3OSAyMi42MjA3IDU5LjU4NDggMjIuNDIzM0M1OS40MzA1IDIxLjY1MTkgNTkuMjMwOSAyMC44NjIyIDU4Ljk5MjUgMjAuMDYzOUM1OC44NTg3IDE5LjYxMTkgNTguNzE1MyAxOS4xNjMxIDU4LjU2MSAxOC43MTQzQzU4LjQxNTQgMTguMzAzMyA1OC4yNjMyIDE3Ljg5NzcgNTguMDk4MiAxNy40OTk2QzU1LjgxNiAxMS43OTcxIDUxLjcwMjUgNy4wMTUzNCA0Ni40MDUgMy45MDY2OEM0NS42OTE5IDMuNDg0ODcgNDQuOTU5NCAzLjA5NTQyIDQ0LjIzMDIgMi43NDkxM0M0My42OTA4IDIuNDkxMjkgNDMuMTUxMyAyLjI0OTY0IDQyLjU5OSAyLjAzMDY0QzM1Ljk5MDQgLTAuNjMxNjY0IDI4LjYxNiAtMC42Nzc3MDggMjEuOTc0NiAxLjkwMTg1QzE1LjMzMzIgNC40ODE0MSA5LjkyMzI1IDkuNDkzMDEgNi44NDQyMiAxNS45MTgxQzYuNzg3MDQgMTYuMDM4OSA2LjcyOTg2IDE2LjE1ODcgNi42NzM3NiAxNi4yNzk1QzkuOTc4NTIgMTIuODE1NiAxNC4wNTY1IDEwLjE4MzQgMTguNTc0IDguNTk4MzlDMTkuODE5OSA4LjE2MDM0IDIxLjA5MTcgNy44MDAwNCAyMi4zODIyIDcuNTE5NTlDMjIuNjUxOSA3LjM3NjgzIDIyLjkyODggNy4yNDgyOCAyMy4yMTE4IDcuMTM0NDZDMjMuNjU2MyA2Ljk0NDU5IDI0LjExMzcgNi43Njc2NiAyNC41Nzc2IDYuNjAyNjFDMjUuODQzOSA2LjE1ODYyIDI3LjE0NjIgNS44MjQ3NSAyOC40Njk5IDUuNjA0NzFDMzQuMTA2NCA0LjY5MTQ2IDM5Ljg4MDIgNS45MzA2MyA0NC42NDU1IDkuMDc2M0M0NS41ODA3IDkuNjg2NzkgNDYuNDY2OSAxMC4zNjkyIDQ3LjI5NjEgMTEuMTE3NEM0Ny43MDkzIDExLjQ4MzEgNDguMTEwNiAxMS44NjUgNDguNDk2OCAxMi4yNjg1QzUwLjM4OTcgMTQuMjM0OSA1MS45MDkzIDE2LjUyOSA1Mi45ODE0IDE5LjAzOTFDNTMuMTgzMSAxOS41MTE2IDUzLjM2ODcgMTkuOTg4NCA1My41NDEzIDIwLjQ3ODJDNTMuOTg1MiAyMS43MzQgNTQuMzE4IDIzLjAyNjMgNTQuNTM2IDI0LjM0MDNDNTQuNjA3MiAyNC43NDgxIDU0LjY2MjIgMjUuMTYzNCA1NC43MDg2IDI1LjU3ODhDNTQuNzk4MSAyNi4zOTQ1IDU0Ljg0MzQgMjcuMjE0NSA1NC44NDQ1IDI4LjAzNTJDNTQuODQ0NCAzMS40Mjc4IDU0LjA3ODUgMzQuNzc2NSA1Mi42MDM4IDM3LjgzMThDNTIuMTY3NiAzOC43NDczIDUxLjY2OTEgMzkuNjMxOSA1MS4xMTE4IDQwLjQ3OTJDNDkuMDY5IDQzLjU4NyA0Ni4yOTU3IDQ2LjE0NjkgNDMuMDM0NyA0Ny45MzUxQzM5Ljc3MzcgNDkuNzIzMiAzNi4xMjQxIDUwLjY4NSAzMi40MDU0IDUwLjczNjVDMzEuMjgzNyA1MC43NTIxIDMwLjE2MjUgNTAuNjgyNSAyOS4wNTE0IDUwLjUyODNDMjYuNzEzNCA1MC4yMDU4IDI0LjQzOTggNDkuNTIxNiAyMi4zMTIxIDQ4LjUwMDFDMjAuODY2MSA0Ny44MDc1IDE5LjQ5NjIgNDYuOTY2MiAxOC4yMjQ1IDQ1Ljk4OTdDMTkuMDcxNiA0OS4xNjE0IDIwLjY3NzggNTIuMDc5NCAyMi45MDQ0IDU0LjQ5MThMMjIuODkzNiA1NC40OTcyWk0xNy41ODM3IDQyLjMwNjdDMTkuMjQxNCA0My45OTUgMjEuMTgyNCA0NS4zNzkyIDIzLjMxODYgNDYuMzk2NEMyMy43OTMzIDQ2LjYyNDQgMjQuMjc1MiA0Ni44MzMgMjQuNzY0MiA0Ny4wMjIxQzIxLjM0MzUgNDMuMzc3MiAxOS4yMjgzIDM4LjcwMDYgMTguNzQ5OSAzMy43MjQ4QzE3Ljc1NzIgMzYuNDY4NSAxNy4zNjI1IDM5LjM5MjYgMTcuNTkyMyA0Mi4zMDEzTDE3LjU4MzcgNDIuMzA2N1pNNDUuMjIxNiAyMS43MDE1QzQ4LjYyNzMgMjUuMzQzNSA1MC43NDg5IDI5Ljk5OTIgNTEuMjYyOSAzNC45NTlDNTIuMjU0MyAzMi4yNDExIDUyLjY1MTYgMjkuMzQyNCA1Mi40MjggMjYuNDU4TDUyLjQyMDQgMjYuNDUwNEM1MC4zODk5IDI0LjM3MjUgNDcuOTM4MyAyMi43NTI5IDQ1LjIzMDIgMjEuNzAwNUw0NS4yMjE2IDIxLjcwMTVaIiBmaWxsPSJ1cmwoI3BhaW50MF9yYWRpYWxfNDZfODA5KSIvPgo8ZGVmcz4KPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDBfcmFkaWFsXzQ2XzgwOSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgzNC45OTU2IDM0LjM1MzgpIHNjYWxlKDM0LjM1OTkgMzQuMzU5OSkiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkRDMzAwIi8+CjxzdG9wIG9mZnNldD0iMC4xMSIgc3RvcC1jb2xvcj0iI0ZEQzIwNSIvPgo8c3RvcCBvZmZzZXQ9IjAuMjUiIHN0b3AtY29sb3I9IiNGREJGMTMiLz4KPHN0b3Agb2Zmc2V0PSIwLjM5IiBzdG9wLWNvbG9yPSIjRkRCOTJCIi8+CjxzdG9wIG9mZnNldD0iMC41NCIgc3RvcC1jb2xvcj0iI0ZFQjI0QyIvPgo8c3RvcCBvZmZzZXQ9IjAuNyIgc3RvcC1jb2xvcj0iI0ZFQTk3NyIvPgo8c3RvcCBvZmZzZXQ9IjAuODYiIHN0b3AtY29sb3I9IiNGRjlEQUEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY5MkRFIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==",
  Apis: {
    [Api.Enable]: SupportLevel.Supported,
    [Api.IsEnabled]: SupportLevel.Supported,
    [Api.ApiVersion]: SupportLevel.Supported,
    [Api.Name]: SupportLevel.Supported,
    [Api.Icon]: SupportLevel.Supported,
    [Api.GetNetworkId]: SupportLevel.Supported,
    [Api.GetUtxos]: SupportLevel.Supported,
    [Api.GetBalance]: SupportLevel.Supported,
    [Api.GetUsedAddresses]: SupportLevel.Supported,
    [Api.GetUnusedAddresses]: SupportLevel.Supported,
    [Api.GetChangeAddress]: SupportLevel.Supported,
    [Api.GetRewardAddress]: SupportLevel.Unsupported,
    [Api.GetRewardAddresses]: SupportLevel.Supported,
    [Api.SignTx]: SupportLevel.Supported,
    [Api.SignData]: SupportLevel.Supported,
    [Api.SubmitTx]: SupportLevel.Supported,
    [Api.GetCollateral]: SupportLevel.Experimental,
    [Api.On]: SupportLevel.Unsupported,
    [Api.Off]: SupportLevel.Unsupported
  }
}