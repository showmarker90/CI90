LESSON5 : State and Events

5.1 Events : events xử lí gần tương tự như trong html.css.js

5.2 State (cực kỳ qtrong) : chứa giá trị -> làm cho component re-render CHỈ KHI state thay đổi

[count,setCount] = useState(0)

count : giá trị của state
setCount : func dùng để update count

\*Lưu ý : k dùng count++, setCount() -> mới trigger re-render

5.2.1 : Lưu ý khi sử dụng state

- 5.3 Render : quá trình vẽ ra những cái thẻ để hiển thị trên browser

* Initial render : quá trình render lần đầu
* Re-render : quá trình react trigger render 1 component lần nữa
