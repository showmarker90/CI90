LESSON13 : Create own hook :

useState,useEffect,useContext,useCallback,useMemo,useRef

RULE :

- Phải ở bên ngoài cùng
- Dùng trong functional component
- Bắt đầu với "use"

customHook , giống function -> shared logic

Ex :

custom hook :
-> useInput : -> value, onChange
-> useCounter : -> count,increment,decrement,multiple,divide
-> useModal -> isOpen,close,open

custom hook :
useCountDown (startTime,endTime)

- countdown : {
  days
  hours
  minutes
  seconds
  }

- status

startTime > now -> start in
startTime < now < endTime -> end in
now > endTime -> ended

- startCountDown -> start countdown
- endCountDown -> end countDown
