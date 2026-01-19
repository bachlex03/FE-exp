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


### Redux Thunk

**What is Redux Thunk?**:

- en: Redux Thunk is a middleware that allows you to write action creators that return a function instead of an action object. This function can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met (perfect for async API calls).
- vi: Redux Thunk là một middleware cho phép bạn viết các action creator trả về một hàm thay vì một đối tượng action. Hàm này có thể được sử dụng để trì hoãn việc dispatch một action, hoặc chỉ dispatch nếu một điều kiện nhất định được đáp ứng (hoàn hảo cho các cuộc gọi API bất đồng bộ).

**How does `createAsyncThunk` work in RTK?**:

- en: It abstracts the standard thunk pattern. It accepts an action type string and a callback function that returns a promise. It automatically generates three action types: `pending`, `fulfilled`, and `rejected`, which you can handle in `extraReducers`.
- vi: Nó tóm tắt mô hình thunk tiêu chuẩn. Nó chấp nhận một chuỗi loại action và một hàm callback trả về một promise. Nó tự động tạo ra ba loại action: `pending`, `fulfilled`, và `rejected`, mà bạn có thể xử lý trong `extraReducers`.

**Why use Thunk over plain actions for APIs?**:

- en: Plain actions cannot handle side-effects (like waiting for a server response). Thunks provide a place to put the `fetch` or `axios` call and then dispatch the resulting data once it arrives, while also managing loading and error states in the global store.
- vi: Các action thông thường không thể xử lý side-effects (như đợi phản hồi từ server). Thunks cung cấp một nơi để thực hiện cuộc gọi `fetch` hoặc `axios` và sau đó dispatch dữ liệu kết quả khi nó đến, đồng thời quản lý các trạng thái loading và error trong global store.

### Redux Saga

**What is Redux Saga?**:

- en: Redux Saga is a middleware library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.
- vi: Redux Saga là một thư viện middleware nhằm mục đích làm cho các side effects của ứng dụng (ví dụ: các tác vụ bất đồng bộ như lấy dữ liệu và các tác vụ không thuần túy như truy cập bộ nhớ đệm trình duyệt) trở nên dễ quản lý hơn, thực thi hiệu quả hơn, dễ kiểm tra và xử lý lỗi tốt hơn.

**How does it differ from Thunk?**:

- en: Thunk uses functions and promises, while Saga uses Generator Functions and "Effects" (plain objects that describe the intent). Sagas act like a separate thread in your application that listens for actions and performs logic in response, unlike Thunks which are called directly like regular actions.
- vi: Thunk sử dụng các hàm và promise, trong khi Saga sử dụng các Hàm Generator và "Effects" (các đối tượng đơn giản mô tả mục đích). Saga hoạt động như một luồng riêng biệt trong ứng dụng của bạn, lắng nghe các action và thực hiện logic phản hồi, không giống như Thunk được gọi trực tiếp như các action thông thường.

**What are 'Effects' in Redux Saga?**:

- en: Effects are instructions for the middleware. Common effects include `call` (run a function), `put` (dispatch an action), `takeLatest` (cancel older requests and start a new one), and `all` (run multiple sagas in parallel).
- vi: Effects là các hướng dẫn cho middleware. Các hiệu ứng phổ biến bao gồm `call` (chạy một hàm), `put` (dispatch một action), `takeLatest` (hủy các yêu cầu cũ và bắt đầu một yêu cầu mới), và `all` (chạy nhiều saga song song).

### Generator Functions & yield (ES6)

**What is `function*` and `yield`?**:

- en: `function*` defines a Generator function which can be exited and later re-entered. `yield` is an operator that pauses the generator. In Sagas, we yield "Effects" (objects) to the middleware, which performs the work and returns the result back to the generator.
- vi: `function*` định nghĩa một hàm Generator có thể thoát ra và sau đó quay lại. `yield` là một toán tử tạm dừng generator. Trong Saga, chúng ta yield các "Effects" (đối tượng) cho middleware, middleware này sẽ thực hiện công việc và trả kết quả ngược lại cho generator.

**Why use Generators instead of async/await?**:

- en: While `async/await` is great for simple sequential calls, Generators allow for much more complex control flows. Sagas can be cancelled midway, run in parallel, or wait for specific external actions—capabilities that are difficult or impossible with standard Promises.
- vi: Mặc dù `async/await` rất tốt cho các cuộc gọi tuần tự đơn giản, Generator cho phép các luồng kiểm soát phức tạp hơn nhiều. Saga có thể bị hủy bỏ giữa chừng, chạy song song hoặc đợi các action bên ngoài cụ thể—các khả năng rất khó hoặc không thể thực hiện được với Promise tiêu chuẩn.

**Is it true that Redux Saga is easier to test than Thunk?**:

- en: Yes. Because Sagas yield plain objects (Effects), you can test the entire logic flow without ever mocking a network request or a database. You simply iterate through the generator and check if the yielded Effect objects match your expectations.
- vi: Đúng vậy. Bởi vì Saga yield các đối tượng đơn giản (Effects), bạn có thể kiểm tra toàn bộ luồng logic mà không bao giờ cần mock một yêu cầu mạng hoặc cơ sở dữ liệu. Bạn chỉ cần lặp qua generator và kiểm tra xem các đối tượng Effect được yield có khớp với mong đợi của bạn hay không.

### Vitest vs Jest

**Why use Vitest instead of Jest?**:

- en: Vitest is faster, uses the same configuration as Vite/Next.js, and has native support for TypeScript and ESM. It avoids the "configuration hell" of Jest when dealing with modern tools like Tailwind or complex import aliases.
- vi: Vitest nhanh hơn, sử dụng cùng một cấu hình với Vite/Next.js và hỗ trợ gốc cho TypeScript cũng như ESM. Nó tránh được "cơn ác mộng cấu hình" của Jest khi làm việc với các công cụ hiện đại như Tailwind hoặc các import alias phức tạp.

### Next.js & Redux Persistence (SSR)

**Why do we need a "No-op" storage in `storage.ts`?**:

- en: Next.js runs code on the server before sending it to the browser. The `window` and `localStorage` objects do not exist on the server. The "No-op" storage provides dummy functions that do nothing on the server, preventing "window is not defined" errors during SSR or the build process. Once the app reaches the browser, it switches to real `localStorage`.
- vi: Next.js chạy mã trên server trước khi gửi đến trình duyệt. Các đối tượng `window` và `localStorage` không tồn tại trên server. Bộ lưu trữ "No-op" cung cấp các hàm giả định không làm gì trên server, giúp ngăn lỗi "window is not defined" trong quá trình SSR hoặc build. Khi ứng dụng chạy trên trình duyệt, nó sẽ chuyển sang `localStorage` thật.

**How does storage work between SSR and CSR? (Lớp lưu trữ hoạt động thế nào giữa SSR và CSR?)**:

- en: During SSR, the `NoopStorage` is used, causing Redux to start with the default initial state. During Hydration (on the client), the code re-runs and switches to real `localStorage`. The `PersistGate` then blocks the UI until the saved state is loaded, ensuring the user sees the persisted data without a "flicker".
- vi: Trong quá trình SSR, `NoopStorage` được sử dụng, khiến Redux bắt đầu với state khởi tạo mặc định. Trong quá trình Hydration (trên client), mã chạy lại và chuyển sang `localStorage` thật. Sau đó, `PersistGate` sẽ chặn UI cho đến khi state đã lưu được tải xong, đảm bảo người dùng thấy dữ liệu đã được lưu mà không bị hiện tượng "nhấp nháy".

### Next.js & Redux Composition

**Does wrapping the app in a Client Component Provider make everything a Client Component?**:

- en: No. In Next.js, "children" passed to a Client Component from a Server Component remain Server Components. This "Wrapper Pattern" allows you to maintain Server Component benefits (like SEO and performance) while still providing client-side context like Redux.
- vi: Không. Trong Next.js, các "children" được truyền vào một Client Component từ một Server Component vẫn giữ nguyên là Server Components. "Wrapper Pattern" này cho phép bạn duy trì các lợi ích của Server Component (như SEO và hiệu suất) trong khi vẫn cung cấp context phía client như Redux.