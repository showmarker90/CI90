LESSON8 : Side-effect vs useEffect

1. Side-effect : -> tác vụ mà component k xử lí được

- HTTP request/response
- Xử lí timer
- Xử lí những sự kiện

2. UseEffect -> xử lí side effect

useEffect(a,b)

- a -> callback fn
- b (optional) -> array dependencies -> mangr phụ thuộc

hook useEffect chạy khi nào ?

1. 1 component render lần đầu tiên
2. chạy lại khi 1 giá trị trong array dependencies thay đổi

3. Life cycle -> vòng đời của 1 component

- Lưu ý : Functional component k có life-cycle, chỉ có class-component mới có ?

class -> tạo ra 1 component -> class component
function -> tạo ra 1 component -> functional component

mounting -> updating -> unmounting
