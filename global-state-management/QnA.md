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

**Where to use Redux in Next.js?**:
- en: In Next.js, Redux is used within **Client Components**. To manage it effectively, we wrap our application's layout (or specific routes) in a `StoreProvider`, which is a Client Component that holds the Redux `Provider`. This allows you to use Redux hooks throughout your application while still benefiting from Server Components elsewhere.
- vi: Trong Next.js, Redux được sử dụng trong các **Client Component**. Để quản lý hiệu quả, chúng ta bao bọc layout của ứng dụng (hoặc các route cụ thể) trong một `StoreProvider` - một Client Component chứa Redux `Provider`. Điều này cho phép bạn sử dụng các hook của Redux trong toàn bộ ứng dụng trong khi vẫn tận dụng được các lợi ích của Server Component ở những nơi khác.

**Who uses Redux Toolkit (RTK)?**:
- en: RTK is the official recommendation for all Redux developers. It is built for developers who want to avoid the "boilerplate" of plain Redux. It includes utilities like `createSlice` that automatically generate action creators and action types, making it the industry standard for modern Redux development.
- vi: RTK là khuyến nghị chính thức cho tất cả các nhà phát triển Redux. Nó được xây dựng cho những người muốn tránh các mã lặp (boilerplate) của Redux thuần túy. Nó bao gồm các tiện ích như `createSlice` tự động tạo ra các action creator và action type, biến nó trở thành tiêu chuẩn ngành cho việc phát triển Redux hiện đại.

**When should you create a typed Redux setup?**:
- en: You should set up types (RootState, AppDispatch) during the initial store configuration. This is crucial in TypeScript projects to ensure that every time you use a hook like `useAppSelector`, you have full autocomplete and type safety, preventing common errors when accessing the global state.
- vi: Bạn nên thiết lập các kiểu dữ liệu (RootState, AppDispatch) ngay trong quá trình cấu hình store ban đầu. Điều này cực kỳ quan trọng trong các dự án TypeScript để đảm bảo rằng mỗi khi bạn sử dụng một hook như `useAppSelector`, bạn sẽ có đầy đủ tính năng tự động gợi ý và an toàn kiểu, ngăn chặn các lỗi phổ biến khi truy cập trạng thái toàn cục.
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

**When to use selectors in Zustand?**:
- en: You should always use selectors (e.g., `useStore(state => state.value)`) instead of destructuring the whole store. This ensures that your component only re-renders when the specific part of the state it is interested in actually changes, maintaining high performance.
- vi: Bạn nên luôn sử dụng selector (ví dụ: `useStore(state => state.value)`) thay vì destructuring toàn bộ store. Điều này đảm bảo rằng component của bạn chỉ render lại khi phần trạng thái cụ thể mà nó quan tâm thực sự thay đổi, giúp duy trì hiệu suất cao.
