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

**What is the difference between PUT and PATCH?**:

- en: PUT is used for "Full Updates" — you send the entire object to the server to replace the existing one. If you miss a field, it might be set to null. PATCH is for "Partial Updates" — you only send the fields you want to change, and the server leaves the rest of the object untouched.
- vi: PUT được sử dụng cho "Cập nhật toàn phần" — bạn gửi toàn bộ đối tượng lên server để thay thế đối tượng hiện có. Nếu bạn thiếu một trường, trường đó có thể bị đặt thành null. PATCH dành cho "Cập nhật từng phần" — bạn chỉ gửi các trường bạn muốn thay đổi và server sẽ giữ nguyên phần còn lại của đối tượng.

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

### RTK Query

**What is RTK Query?**:

- en: RTK Query is an advanced data fetching and caching tool built on top of Redux Toolkit. It simplifies loading data from a server by automating the entire process: fetching, caching, synchronizing state, and providing hooks for UI components. It eliminates the need to write manual Thunks or Sagas for simple API calls.
- vi: RTK Query là một công cụ tải dữ liệu và bộ nhớ đệm nâng cao được xây dựng dựa trên Redux Toolkit. Nó đơn giản hóa việc tải dữ liệu từ server bằng cách tự động hóa toàn bộ quy trình: tìm nạp, lưu bộ nhớ đệm, đồng bộ hóa state và cung cấp các hook cho các component UI. Nó loại bỏ nhu cầu viết Thunks hoặc Sagas thủ công cho các lệnh gọi API đơn giản.

**What are "Tags" in RTK Query?**:

- en: Tags are labels used by RTK Query's automated re-fetching system. Queries "provide" tags (like `Post` or `Post:LIST`), and mutations "invalidate" those same tags. When a mutation invalidates a tag, RTK Query automatically knows which queries are now "out of date" and re-fetches them to keep the UI in sync.
- vi: Tags là các nhãn được sử dụng bởi hệ thống tự động tải lại của RTK Query. Các Query "cung cấp" (provide) các tag (như `Post` hoặc `Post:LIST`), và các Mutation "vô hiệu hóa" (invalidate) chính các tag đó. Khi một Mutation vô hiệu hóa một tag, RTK Query sẽ tự động biết query nào hiện đã "lỗi thời" và tải lại chúng để giữ cho UI đồng bộ.

**What does the `.unwrap()` method do?**:

- en: By default, RTK Query mutation/thunk promises always resolve, even on error. Chaining `.unwrap()` changes this: it returns the raw `data` on success and **throws** an error on failure. This allows you to use standard `try...catch` blocks for cleaner error handling and provides direct access to the payload.
- vi: Theo mặc định, các promise từ mutation/thunk của RTK Query luôn resolve, ngay cả khi có lỗi. Việc sử dụng thêm `.unwrap()` sẽ thay đổi điều này: nó trả về dữ liệu (`data`) gốc khi thành công và **ném ra** (throw) lỗi khi thất bại. Điều này cho phép bạn sử dụng các khối `try...catch` tiêu chuẩn để xử lý lỗi gọn gàng hơn và truy cập trực tiếp vào payload.

### React Query (TanStack Query)

**What is the difference between RTK Query and React Query?**:

- en: RTK Query is part of Redux Toolkit and stores data in the Redux store. React Query is a standalone library that stores data in its own internal cache. RTK Query is better if you already use Redux and want everything integrated; React Query is better if you want a lighter solution or need advanced features like infinite scrolling and window-focus refetching out of the box.
- vi: RTK Query là một phần của Redux Toolkit và lưu trữ dữ liệu trong Redux store. React Query là một thư viện độc lập lưu trữ dữ liệu trong bộ nhớ đệm nội bộ riêng. RTK Query tốt hơn nếu bạn đã sử dụng Redux và muốn mọi thứ tích hợp; React Query tốt hơn nếu bạn muốn một giải pháp nhẹ hơn hoặc cần các tính năng nâng cao như cuộn vô hạn và tự động tải lại khi focus vào cửa sổ.

**Is React Query "State Management"?**:

- en: No, it is "Server State Management". Standard state management (like Redux) handles UI state like "is the sidebar open?". React Query handles "is this data from the server still valid?". It effectively replaces Redux for 80% of data-heavy applications.
- vi: Không, nó là "Quản lý trạng thái Server". Quản lý trạng thái tiêu chuẩn (như Redux) xử lý các trạng thái UI như "sidebar có đang mở không?". React Query xử lý "dữ liệu từ server này còn hợp lệ không?". Nó thay thế Redux hiệu quả cho 80% các ứng dụng nặng về dữ liệu.

**What is `ReactQueryDevtools` doing?**:

- en: `ReactQueryDevtools` is a visualization tool for development. It provides a dashboard to monitor cache health (Fresh/Stale/Inactive), inspect the exact JSON data stored for each Query Key, and manually trigger refetches or invalidations. It solves the "Black Box" problem by making the internal state of your server cache visible.
- vi: `ReactQueryDevtools` là một công cụ trực quan hóa cho quá trình phát triển. Nó cung cấp một dashboard để theo dõi sức khỏe của cache (Fresh/Stale/Inactive), kiểm tra chính xác dữ liệu JSON được lưu trữ cho mỗi Query Key, và kích hoạt thủ công việc tải lại hoặc vô hiệu hóa. Nó giải quyết vấn đề "Hộp đen" bằng cách làm cho trạng thái nội bộ của server cache trở nên rõ ràng.

**What is `queryKey` and what does it do?**:

- en: `queryKey` is the unique identifier for a query in the cache. It acts as a Cache ID (keeping different data separate), a Dependency Array (automatically re-fetching when any value in the key changes), and a Target for Invalidation (allowing you to mark specific data as "stale" after a mutation).
- vi: `queryKey` là mã định danh duy nhất cho một query trong cache. Nó hoạt động như một Cache ID (giữ các tập dữ liệu khác nhau tách biệt), một Dependency Array (tự động fetch lại khi bất kỳ giá trị nào trong key thay đổi), và một Mục tiêu Vô hiệu hóa (cho phép bạn đánh dấu dữ liệu cụ thể là "lỗi thời" sau một mutation).


<!-- ### Redux vs Zustand

**What are they?**:
- en: **Redux** is a mature, feature-rich state management library with a strict unidirectional data flow and a large ecosystem. **Zustand** is a small, fast, and scalable state management tool that provides a minimal, hooks-based API without the need for boilerplate like providers or complex setups.
- vi: **Redux** là một thư viện quản lý trạng thái hoàn thiện, giàu tính năng với luồng dữ liệu một chiều nghiêm ngặt và hệ sinh thái lớn. **Zustand** là một công cụ quản lý trạng thái nhỏ, nhanh và có thể mở rộng, cung cấp API dựa trên hook tối giản mà không cần các mã lặp (boilerplate) như provider hay thiết lập phức tạp.

**Why choose Zustand over Redux?**:
- en: Zustand is much simpler to learn and implement. It requires zero boilerplate, performs optimally (by allowing fine-grained selectors), and feels more like "native React." It is ideal for small to medium projects where Redux's strictness is overkill.
- vi: Zustand dễ học và triển khai hơn nhiều. Nó không yêu cầu mã lặp, đạt hiệu suất tối ưu (bằng cách cho phép các selector chi tiết) và mang lại cảm giác giống như "React thuần túy". Nó lý tưởng cho các dự án quy mô vừa và nhỏ, nơi sự khắt khe của Redux là không cần thiết.

**How do they differ in structure?**:
- en: Redux requires a central **Store**, **Actions**, and **Reducers** (even with RTK). Zustand uses a simple function to create a **Hook**, which contains both the state and the actions. You don't need a `<Provider />` to wrap your app in Zustand.
- vi: Redux yêu cầu một **Store** trung tâm, **Actions**, và **Reducers** (ngay cả với RTK). Zustand sử dụng một hàm đơn giản để tạo ra một **Hook**, chứa cả trạng thái và các hành động. Bạn không cần một `<Provider />` để bao bọc ứng dụng trong Zustand.

**When should you prefer Redux?**:
- en: Redux is better for very large, complex enterprise applications with many internal state transitions, a need for powerful time-travel debugging, or when working in a large team where a strict, standardized architecture is necessary to maintain consistency.
- vi: Redux tốt hơn cho các ứng dụng doanh nghiệp cực lớn, phức tạp với nhiều chuyển đổi trạng thái nội bộ, cần các tính năng gỡ lỗi time-travel mạnh mẽ, hoặc khi làm việc trong một nhóm lớn nơi một kiến trúc tiêu chuẩn hóa, nghiêm ngặt là cần thiết để duy trì tính nhất quán.

**Which one is "Better"?**:
- en: There is no "better"—only "better for the job." If you want speed and minimalism, go with Zustand. If you want a robust, battle-tested standard with advanced dev-tools and middleware, go with Redux Toolkit.
- vi: Không có cái nào "tốt hơn"—chỉ có cái nào "phù hợp hơn cho công việc". Nếu bạn muốn tốc độ và sự tối giản, hãy chọn Zustand. Nếu bạn muốn một tiêu chuẩn mạnh mẽ, đã được thử thách qua thời gian với bộ công cụ phát triển và middleware nâng cao, hãy chọn Redux Toolkit. -->

### Web API & Security

**What is the HTTP OPTIONS method (Preflight Request)?**:

- en: OPTIONS is a "preflight" request automatically sent by the browser. 
    - **Why it happens (CORS)**: Since our app is on `localhost:3000` and the API is on `json-placeholder`, they are different "Origins". The browser triggers a preflight if the request is "Non-Simple" (e.g., using `POST/PUT/DELETE` or custom headers like `Content-Type: application/json`).
    - **How it works**:
        1. **Preflight**: Browser sends an `OPTIONS` request to check permissions.
        2. **Response**: Server responds with allowed methods and origins.
        3. **Actual Request**: Browser sends the real data only after the preflight is successful.
- vi: OPTIONS là một yêu cầu "tiền kiểm" (preflight) được trình duyệt tự động gửi đi.
    - **Tại sao nó xảy ra (CORS)**: Vì ứng dụng của chúng ta ở `localhost:3000` và API ở `json-placeholder`, chúng là các "Origin" khác nhau. Trình duyệt sẽ kích hoạt preflight nếu yêu cầu là "Không đơn giản" (ví dụ: sử dụng `POST/PUT/DELETE` hoặc các header tùy chỉnh như `Content-Type: application/json`).
    - **Cách thức hoạt động**:
        1. **Preflight**: Trình duyệt gửi yêu cầu `OPTIONS` để kiểm tra quyền.
        2. **Phản hồi**: Server phản hồi với các phương thức và origin được phép.
        3. **Yêu cầu thực tế**: Trình duyệt chỉ gửi dữ liệu thật sau khi preflight thành công.

### Testing & Mocking

**What problem does MSW (Mock Service Worker) solve?**:

- en: MSW intercepts network requests at the browser/node level and returns mock responses. This solves the problem of "fragile" mocks (like spying on `fetch`), allows testing realistic status codes and headers, and makes tests implementation-independent. Your app thinks it's talking to a real server.
- vi: MSW chặn các yêu cầu mạng ở cấp độ trình duyệt/node và trả về các phản hồi giả lập. Điều này giải quyết vấn đề về các bản mock "mong manh" (như việc spy vào `fetch`), cho phép kiểm tra các mã trạng thái và header thực tế, đồng thời làm cho các bài test không phụ thuộc vào cách thực hiện nội bộ. Ứng dụng của bạn sẽ tin rằng nó đang giao tiếp với một máy chủ thực sự.

**Is RTK Query testing common in professional projects?**:

- en: Yes. It is considered a best practice for validating endpoint configurations, ensuring cache invalidation logic (Tags) works correctly, and verifying how the UI handles various API states (Loading/Success/Error) in a controlled but realistic environment.
- vi: Có. Nó được coi là một thực hành tốt nhất (best practice) để xác thực cấu hình endpoint, đảm bảo logic vô hiệu hóa bộ nhớ đệm (Tags) hoạt động chính xác và xác minh cách UI xử lý các trạng thái API khác nhau (Loading/Success/Error) trong một môi trường được kiểm soát nhưng thực tế.

**Is it possible to write unit tests for Redux Thunk and React Query?**:

- en: Yes. For **Redux Thunk**, you test by dispatching the thunk to a real or mock store and asserting the state changes in the reducer. For **React Query**, you use `renderHook` and wrap it in a `QueryClientProvider`. Both rely on **MSW** to mock the network layer, making the tests realistic without needing a real server.
- vi: Có. Đối với **Redux Thunk**, bạn kiểm tra bằng cách dispatch thunk tới một store thật hoặc giả lập và kiểm tra sự thay đổi trạng thái trong reducer. Đối với **React Query**, bạn sử dụng `renderHook` và bao bọc nó trong một `QueryClientProvider`. Cả hai đều dựa trên **MSW** để giả lập lớp mạng, giúp các bài test trở nên thực tế mà không cần server thật.
