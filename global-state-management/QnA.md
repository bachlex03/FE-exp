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
