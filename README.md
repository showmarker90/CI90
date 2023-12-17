LESSON 12 : Other hook in React;

useState : state quản lý 1 component
useEffect : side effect
useContext : handle global state

1 :useRef :

- thao tác với DOM
- lưu giá trị giữa mỗi lần re-render
- k làm cho component bị re-render

* React dev : không khuyếch khích thay đổi trực tiếp vào DOM
* React : Virtual DOM (DOM ảo)

performance
2 : memo : ghi nhớ 1 component
3 : useCallback : ghi nhớ 1 function
useCallback(fn,[])

Bài tập :

1 : UseRef

- buttonAddClass,buttonAddID, input
  ấn vào buttonAddClass thì thêm class cho input
  ấn vào buttonAddID thì thêm id cho input
- button, div hình vuông
  ấn vào button -> vuông -> tròn
  ấn vào button -> tròn -> vuông

2 : Memo
\*Đề bài : Component A là con của Component B,Trong component B có 1 counter
mỗi lần Component B re-render -> component A bị re-render

1: Ngăn chặn component A re-render
2 : component A nhận vào 1 props và 1 object {username : "mindX"}
a, Lúc này componentA có re-render không ? Tại sao
b, Nếu componentA re-render -> ngăn chặn re-render của A

3 : UseCallback
\*Đề bài : Component A có 1 counter, fn, useEffect
UseEffect có dependencies là fn

- ComponentA re-render thì useEffect có chạy không ? Tại sao
- Nếu useEffect chạy thì tối ưu cho nó
  4 : UseMemo
  \*Đề bài : Component A có 1 counter, user<object>,useEffect
  UseEffect có dependencies là user

- ComponentA re-render thì useEffect có chạy không ? Tại sao
- Nếu UseEffect chạy thì tối ưu
