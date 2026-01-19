# QnA Redux Ecosystem

## Guideline

- Follow 5W1H for each question (can be flexible)
- Answer in 2 languages (English and Vietnamese)

## Questions

### Redux

**What is Redux?**: 

- en: Redux is a predictable state container for JavaScript applications, designed to help manage global state across an entire application in a consistent manner.
- vi: Redux là một container trạng thái dự đoán cho các ứng dụng JavaScript, được thiết kế để giúp quản lý trạng thái toàn cục trong toàn bộ ứng dụng một cách nhất quán.

**Why use Redux?**:
- en: Redux is primarily used to manage complex application state in a predictable way. By centralizing state in a single store, it prevents "prop drilling," enables powerful debugging features like Time-Travel, simplifies state persistence, and ensures that state mutations are traceable and consistent across the entire UI.
- vi: Redux chủ yếu được sử dụng để quản lý trạng thái ứng dụng phức tạp một cách có thể dự đoán được. Bằng cách tập trung trạng thái vào một store duy nhất, nó ngăn chặn tình trạng "prop drilling", cho phép các tính năng gỡ lỗi mạnh mẽ như Time-Travel, đơn giản hóa việc lưu trữ trạng thái và đảm bảo rằng các thay đổi trạng thái có thể truy vết và nhất quán trên toàn bộ giao diện người dùng.

**How does it work?**:
- en: Redux implements a strict unidirectional data flow. When an event occurs, the UI **dispatches** an **Action** (a plain object describing the change). The **Store** passes the current **State** and the action to a **Reducer**—a pure function that computes the next state: `(state, action) => newState`. The **Store** then updates and notifies all **Subscribers** to trigger re-renders with the new state.
- en: Redux implements a strict unidirectional data flow involving **Actions**, **Reducers**, **Store**, and **Subscribers**:
    - **Action**: A plain object describing a change, dispatched from the UI when an event occurs.
    - **Reducer**: A pure function that computes the next state using `(state, action) => newState`.
    - **Store**: The central container that passes the current state and action to the reducer, then updates.
    - **Subscribers**: Functions notified by the store to trigger UI re-renders with the new state.
- vi: Redux triển khai luồng dữ liệu một chiều nghiêm ngặt. Khi một sự kiện xảy ra, UI **dispatch** một **Action** (một đối tượng đơn giản mô tả sự thay đổi). **Store** chuyển **State** hiện tại và action đó vào một **Reducer**—một hàm thuần túy tính toán trạng thái tiếp theo: `(state, action) => newState`. Sau đó, **Store** cập nhật và thông báo cho tất cả các **Subscribers** để kích hoạt việc render lại với trạng thái mới.
- vi: Redux triển khai luồng dữ liệu một chiều nghiêm ngặt bao gồm **Actions**, **Reducers**, **Store**, và **Subscribers**:
    - **Action**: Một đối tượng đơn giản mô tả sự thay đổi, được dispatch từ UI khi có sự kiện xảy ra.
    - **Reducer**: Một hàm thuần túy tính toán trạng thái tiếp theo bằng cách sử dụng `(state, action) => newState`.
    - **Store**: Container trung tâm chuyển trạng thái hiện tại và action cho reducer, sau đó cập nhật.
    - **Subscribers**: Các hàm được store thông báo để kích hoạt render lại giao diện với trạng thái mới.



**What are subscribers in this context?**:
- en: Subscribers are callback functions registered with the Redux store using `store.subscribe(listener)`. In a React application, the `react-redux` library handles this automatically: components "subscribe" to the store so they can detect state changes and trigger a re-render to reflect the updated data.
- vi: Subscribers là các hàm callback được đăng ký với Redux store bằng cách sử dụng `store.subscribe(listener)`. Trong ứng dụng React, thư viện `react-redux` tự động xử lý việc này: các component "đăng ký" (subscribe) vào store để chúng có thể phát hiện các thay đổi trạng thái và kích hoạt render lại để phản ánh dữ liệu đã cập nhật.

### react-redux

**What is react-redux?**:
- en: It is the official Redux UI binding library for React. While Redux can be used with any framework (or no framework at all), react-redux provides the necessary tools to connect your React components to the Redux store.
- vi: Đây là thư viện ràng buộc giao diện người dùng chính thức của Redux cho React. Mặc dù Redux có thể được sử dụng với bất kỳ framework nào (hoặc không cần framework), react-redux cung cấp các công cụ cần thiết để kết nối các component React của bạn với Redux store.

**How do components interact with the store (Hooks)?**:
- en: Modern react-redux uses hooks: `useSelector` to extract data from the store state, and `useDispatch` to send actions to the store. 
- vi: react-redux hiện đại sử dụng các hook: `useSelector` để trích xuất dữ liệu từ trạng thái store, và `useDispatch` để gửi các action đến store.


**Is Redux only for React?**:
- en: No. Redux Core is a UI-agnostic library (Pure JS). You can use it with any framework. However, you need "binding" libraries to connect it to specific UIs: `react-redux` for React, `angular-redux` for Angular, or `@ngrx/store` (inspired by Redux).
- vi: Không. Redux Core là một thư viện độc lập với UI (Pure JS). Bạn có thể sử dụng nó với bất kỳ framework nào. Tuy nhiên, bạn cần các thư viện "ràng buộc" (binding) để kết nối nó với các giao diện cụ thể: `react-redux` cho React, `angular-redux` cho Angular, hoặc `@ngrx/store` (lấy cảm hứng từ Redux).

**Is 'Plain Redux' the same as 'Redux Core'?**:
- en: Technically yes, but in the industry, "Plain Redux" usually refers to the **old way** of writing Redux (manual constants, types). Modern Redux (Redux Toolkit) is still Redux Core under the hood, but with a much better developer experience.
- vi: Về mặt kỹ thuật là có, nhưng trong ngành công nghiệp, "Plain Redux" thường ám chỉ **cách viết cũ** (tự tạo constants, types thủ công). Redux hiện đại (Redux Toolkit) vẫn là Redux Core bên dưới, nhưng với trải nghiệm lập trình tốt hơn nhiều.

### Plain Redux vs Redux Toolkit (RTK)

**What are they?**:
- en: **Plain Redux** is the original core library that requires manual setup of actions, constants, and reducers. **Redux Toolkit** is the official, opinionated toolset built on top of Redux to simplify development and eliminate boilerplate.
- vi: **Plain Redux** là thư viện cốt lõi ban đầu yêu cầu thiết lập thủ công các action, constant và reducer. **Redux Toolkit** là bộ công cụ chính thức được xây dựng trên nền tảng Redux để đơn giản hóa quá trình phát triển và loại bỏ mã lặp (boilerplate).

**Why choose Redux Toolkit over Plain Redux?**:
- en: RTK solves the three common complaints about Redux: it's too complicated to configure, it requires too much boilerplate code, and it needs many extra packages to do anything useful (like Thunk or DevTools).
- vi: RTK giải quyết ba phàn nàn phổ biến về Redux: cấu hình quá phức tạp, yêu cầu quá nhiều mã lặp, và cần quá nhiều gói bổ sung để thực hiện các tác vụ hữu ích (như Thunk hoặc DevTools).

**How does state mutation differ (Immer)?**:
- en: In **Plain Redux**, you must update state immutably using the spread operator (`...state`). In **RTK**, you can write "mutative" code (e.g., `state.value += 1`) because it uses the **Immer** library under the hood to automatically convert it into a safe immutable update.
- vi: Trong **Plain Redux**, bạn phải cập nhật trạng thái một cách bất biến bằng toán tử spread (`...state`). Trong **RTK**, bạn có thể viết mã theo kiểu "thay đổi trực tiếp" (ví dụ: `state.value += 1`) vì nó sử dụng thư viện **Immer** bên dưới để tự động chuyển đổi nó thành một bản cập nhật bất biến an toàn.

**What is the 'Boilerplate' difference?**:
- en: Plain Redux requires separate files/sections for Action Types, Action Creators, and Reducers. RTK uses `createSlice`, which automatically generates actions and action types based on your reducer names, cutting code volume by about 50-70%.
- en: Why it reduces code:
    - **No manual constants**: Action types like `COUNTER_INCREMENT` are auto-generated from function names.
    - **No manual creators**: Functions to trigger actions are created automatically.
    - **Immer integration**: You can write "mutative" code (`state.value++`) instead of complex nested spreads (`{...state, value: state.value + 1}`).
- vi: Plain Redux yêu cầu các tệp/phần riêng biệt cho Action Types, Action Creators và Reducers. RTK sử dụng `createSlice`, tự động tạo ra các action và action type dựa trên tên reducer của bạn, giúp cắt giảm khoảng 50-70% lượng mã nguồn.
- vi: Tại sao nó giảm lượng mã:
    - **Không cần hằng số thủ công**: Các action type như `COUNTER_INCREMENT` được tự động tạo từ tên hàm.
    - **Không cần hàm tạo action thủ công**: Các hàm để kích hoạt action được tạo tự động.
    - **Tích hợp Immer**: Bạn có thể viết mã kiểu "thay đổi trực tiếp" (`state.value++`) thay vì phải dùng toán tử spread phức tạp (`{...state, value: state.value + 1}`).

**When should you still use Plain Redux?**:
- en: Almost never in new projects. Plain Redux is mostly seen in legacy codebases. For all modern applications, Redux Toolkit is the industry standard and the official recommendation from the Redux team.
- vi: Gần như không bao giờ trong các dự án mới. Plain Redux chủ yếu được thấy trong các dự án cũ (legacy). Đối với tất cả các ứng dụng hiện đại, Redux Toolkit là tiêu chuẩn ngành và là khuyến nghị chính thức từ đội ngũ Redux.

### Redux Persist Configuration

**Why do we need to ignore certain actions in serializableCheck?**:

- en: Redux Toolkit has a built-in middleware that checks if all actions and state are serializable (plain strings/numbers/objects). Redux Persist uses internal actions (like FLUSH, REHYDRATE, etc.) that contain non-serializable values (promises, functions). Ignoring them prevents console warnings.
- vi: Redux Toolkit có một middleware tích hợp sẵn để kiểm tra xem tất cả các action và state có thể tuần tự hóa hay không (chuỗi/số/object đơn giản). Redux Persist sử dụng các action nội bộ (như FLUSH, REHYDRATE, v.v.) chứa các giá trị không thể tuần tự hóa (promise, hàm). Việc bỏ qua chúng giúp ngăn chặn các cảnh báo lỗi trong console.

### Redux & TypeScript

**What does `ReturnType<typeof makeStore>` do?**:

- en: It automatically infers the type of the Redux store instance created by the `makeStore` function. `typeof` gets the function signature, and `ReturnType` extracts what it returns. This is essential for defining `RootState` and `AppDispatch` accurately without manual updates.
- vi: Nó tự động suy luận kiểu dữ liệu của Redux store instance được tạo ra bởi hàm `makeStore`. `typeof` lấy chữ ký của hàm, và `ReturnType` trích xuất giá trị mà hàm đó trả về. Điều này rất quan trọng để định nghĩa `RootState` và `AppDispatch` một cách chính xác mà không cần cập nhật thủ công.

In a standard Redux setup, we need two very important types:

**RootState**: The shape of all the data inside your store.
**AppDispatch**: The type of the dispatch function (which includes knowledge of your thunks, sagas, etc.).

By defining **AppStore** first, we can then define **RootState** and **AppDispatch** based on it:

```typescript
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
```

The Benefit: If you add a new slice (e.g., userSlice) to your store, TypeScript will automatically know about it everywhere in your app without you having to manually update any type definitions. This is called "Single Source of Truth" for your types.

**Why do we need this? (Tại sao cần làm vậy?)**
En: In Next.js, we use a function (**makeStore**) to create a new store instance for every request (on the server) or once on the client. We need the exact type of this instance to define **RootState** (what data is inside) and **AppDispatch** (what actions we can send). This ensures 100% type safety when you use **useSelector** or **useDispatch**.
Vi: Trong Next.js, chúng ta dùng một hàm (**makeStore**) để tạo ra một instance store mới cho mỗi request (ở server) hoặc một lần ở client. Chúng ta cần kiểu chính xác của instance này để định nghĩa **RootState** (dữ liệu bên trong là gì) và **AppDispatch** (các action có thể gửi đi). Điều này đảm bảo an toàn kiểu 100% khi bạn dùng **useSelector** hay **useDispatch**.


### Next.js & Redux Composition

**Does wrapping the app in a Client Component Provider make everything a Client Component?**:

- en: No. In Next.js, "children" passed to a Client Component from a Server Component remain Server Components. This "Wrapper Pattern" allows you to maintain Server Component benefits (like SEO and performance) while still providing client-side context like Redux.
- vi: Không. Trong Next.js, các "children" được truyền vào một Client Component từ một Server Component vẫn giữ nguyên là Server Components. "Wrapper Pattern" này cho phép bạn duy trì các lợi ích của Server Component (như SEO và hiệu suất) trong khi vẫn cung cấp context phía client như Redux.