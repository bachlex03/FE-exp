# QnA Global State Management

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
- en: Redux implements a strict unidirectional data flow involving **Actions**, **Reducers**, **Store**, and **Subscribers**:
    - **Action**: A plain object describing a change, dispatched from the UI when an event occurs.
    - **Reducer**: A pure function that computes the next state using `(state, action) => newState`.
    - **Store**: The central container that passes the current state and action to the reducer, then updates.
    - **Subscribers**: Functions notified by the store to trigger UI re-renders with the new state.
- vi: Redux triển khai luồng dữ liệu một chiều nghiêm ngặt bao gồm **Actions**, **Reducers**, **Store**, và **Subscribers**:
    - **Action**: Một đối tượng đơn giản mô tả sự thay đổi, được dispatch từ UI khi có sự kiện xảy ra.
    - **Reducer**: Một hàm thuần túy tính toán trạng thái tiếp theo bằng cách sử dụng `(state, action) => newState`.
    - **Store**: Container trung tâm chuyển trạng thái hiện tại và action cho reducer, sau đó cập nhật.
    - **Subscribers**: Các hàm được store thông báo để kích hoạt render lại giao diện với trạng thái mới.

### Zustand

**What is Zustand?**:
- en: Zustand is a small, fast, and scalable state management library for React. It is known for its "bearbones" approach, providing a minimalist API that is easy to understand and integrate without the complexity of traditional state containers.
- vi: Zustand là một thư viện quản lý trạng thái nhỏ, nhanh và có thể mở rộng cho React. Nó nổi tiếng với cách tiếp cận tối giản, cung cấp một API cực kỳ đơn giản, dễ hiểu và dễ tích hợp mà không có sự phức tạp của các bộ chứa trạng thái truyền thống.

**Why use Zustand?**:
- en: Zustand is preferred for its lack of boilerplate. It doesn't require wrapping your app in a `Provider`, it has a very low learning curve, and it offers great performance out of the box through fine-grained selectors that prevent unnecessary re-renders.
- vi: Zustand được ưa chuộng vì không yêu cầu mã lặp (boilerplate). Nó không cần phải bao bọc ứng dụng của bạn trong một `Provider`, có quy trình học tập rất ngắn và mang lại hiệu suất tuyệt vời nhờ tính năng selector chi tiết giúp ngăn chặn việc render lại không cần thiết.

**How does it work?**:
- en: You use the `create` function to define a store, which returns a custom hook. This hook contains both the state variables and the functions (actions) to update them. Components simply call this hook to access what they need.
- vi: Bạn sử dụng hàm `create` để định nghĩa một store, hàm này trả về một hook tùy chỉnh. Hook này chứa cả các biến trạng thái và các hàm (action) để cập nhật chúng. Các component chỉ cần gọi hook này để truy cập những gì chúng cần.

**Where to use Zustand in Next.js?**:
- en: Like Redux, Zustand is used in **Client Components**. However, because it doesn't require a `Provider`, you can simply import your store hook and use it directly in any client-side file. This makes it much easier to set up for global state that doesn't need to be initiated on the server.
- vi: Giống như Redux, Zustand được sử dụng trong các **Client Component**. Tuy nhiên, vì nó không yêu cầu `Provider`, bạn chỉ cần import store hook và sử dụng trực tiếp trong bất kỳ tệp phía client nào. Điều này giúp việc thiết lập trạng thái toàn cục dễ dàng hơn nhiều khi không cần khởi tạo trên server.

**Who should choose Zustand over Redux?**:
- en: Developers who value speed, simplicity, and minimalism. It is ideal for teams who want to manage shared state without the overhead of actions, reducers, and providers, or for projects that don't require Redux's extensive middleware ecosystem.
- vi: Những nhà phát triển coi trọng tốc độ, sự đơn giản và tính tối giản. Nó lý tưởng cho các nhóm muốn quản lý trạng thái chia sẻ mà không cần các thành phần rườm rà như action, reducer và provider, hoặc cho các dự án không yêu cầu hệ sinh thái middleware sâu rộng của Redux.


### Redux vs Zustand

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
- vi: Không có cái nào "tốt hơn"—chỉ có cái nào "phù hợp hơn cho công việc". Nếu bạn muốn tốc độ và sự tối giản, hãy chọn Zustand. Nếu bạn muốn một tiêu chuẩn mạnh mẽ, đã được thử thách qua thời gian với bộ công cụ phát triển và middleware nâng cao, hãy chọn Redux Toolkit.

### Redux Persist

**Why do we need a "No-op" storage in Next.js?**:
- en: Next.js runs on both the server and the client. Since `localStorage` only exists in the browser, using it directly on the server causes errors. A "No-op" storage provides empty functions that prevent these errors during Server-Side Rendering (SSR).
- vi: Next.js chạy trên cả server và client. Vì `localStorage` chỉ tồn tại trên trình duyệt, việc sử dụng nó trực tiếp trên server sẽ gây ra lỗi. Một "No-op" storage cung cấp các hàm rỗng để ngăn chặn các lỗi này trong quá trình Server-Side Rendering (SSR).

**What is the purpose of `serializableCheck` in middleware?**:
- en: Redux Toolkit expects all actions to be plain objects. `redux-persist` uses special actions (like REHYDRATE) that may contain non-serializable data. We must configure the middleware to ignore these specific actions to avoid console warnings.
- vi: Redux Toolkit yêu cầu tất cả các action phải là các đối tượng đơn giản. `redux-persist` sử dụng các action đặc biệt (như REHYDRATE) có thể chứa dữ liệu không thể tuần tự hóa. Chúng ta phải cấu hình middleware để bỏ qua các action cụ thể này nhằm tránh các cảnh báo trong console.
