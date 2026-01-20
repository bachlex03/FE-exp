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
- vi: Redux Toolkit yêu cầu tất cả các action phải là các đối tượng đơn giản. `redux-persist` sử dụng các action đặc biệt (như REHYDRATE) có thể chứa dữ liệu không thể tuần tự hóa. Chúng ta phải cấu hình middleware để bỏ qua các action cụ thể này nhằm tránh các cảnh báo trong console.

### Zustand Persistence

**Does Zustand have a feature like redux-persist?**:
- en: Yes. Zustand includes a built-in `persist` middleware. It allows you to save your store state to `localStorage`, `sessionStorage`, or IndexedDB with very minimal configuration compared to Redux.
- vi: Có. Zustand bao gồm một middleware `persist` được tích hợp sẵn. Nó cho phép bạn lưu trạng thái store vào `localStorage`, `sessionStorage` hoặc IndexedDB với cấu hình cực kỳ tối giản so với Redux.

**What are the advantages of Zustand persistence over Redux?**:
- en: The main advantage is simplicity. You don't need to create separate storage files or configure complex middleware ignore-lists. You simply wrap your store in the `persist` function and give it a unique name. It also handles hydration automatically for Next.js.
- vi: Ưu điểm chính là sự đơn giản. Bạn không cần tạo các tệp lưu trữ riêng biệt hay cấu hình các danh sách bỏ qua (ignore-list) phức tạp cho middleware. Bạn chỉ cần bao bọc store của mình trong hàm `persist` và đặt cho nó một cái tên duy nhất. Nó cũng tự động xử lý quá trình hydration cho Next.js.
- vi: Ưu điểm chính là sự đơn giản. Bạn không cần tạo các tệp lưu trữ riêng biệt hay cấu hình các danh sách bỏ qua (ignore-list) phức tạp cho middleware. Bạn chỉ cần bao bọc store của mình trong hàm `persist` và đặt cho nó một cái tên duy nhất. Nó cũng tự động xử lý quá trình hydration cho Next.js.

### Jotai

**What is Jotai?**:
- en: Jotai is a primitive and flexible state management library for React. It follows an "atomic" pattern, where the state is split into small, independent units called **atoms**. These atoms can be combined and transformed to build complex state logic.
- vi: Jotai là một thư viện quản lý trạng thái đơn giản và linh hoạt cho React. Nó tuân theo mô hình "nguyên tử" (atomic), nơi trạng thái được chia thành các đơn vị nhỏ độc lập gọi là **atoms**. Các atom này có thể được kết hợp và biến đổi để xây dựng logic trạng thái phức tạp.

**Why use Jotai?**:
- en: Jotai is excellent for fine-grained state management. It prevents unnecessary re-renders by ensuring that only components subscribed to a specific atom update when that atom's value changes. It has a very minimal API (`atom` and `useAtom`) and zero boilerplate.
- vi: Jotai tuyệt vời cho việc quản lý trạng thái chi tiết. Nó ngăn chặn việc render lại không cần thiết bằng cách đảm bảo rằng chỉ các component đăng ký một atom cụ thể mới cập nhật khi giá trị của atom đó thay đổi. Nó có một API cực kỳ tối giản (`atom` và `useAtom`) và không có mã lặp (boilerplate).

**How does it differ from Zustand?**:
- en: While Zustand is store-based (one central store for a feature), Jotai is atom-based (many small independent pieces). Jotai is often preferred for highly dynamic UIs where state pieces are frequently added or changed, or when you need a "bottom-up" approach to state design.
- vi: Trong khi Zustand dựa trên store (một store trung tâm cho một tính năng), Jotai dựa trên atom (nhiều phần nhỏ độc lập). Jotai thường được ưa chuộng cho các giao diện người dùng cực kỳ năng động, nơi các phần trạng thái thường xuyên được thêm vào hoặc thay đổi, hoặc khi bạn cần cách tiếp cận "từ dưới lên" cho thiết kế trạng thái.

**Where to use Jotai in Next.js?**:
- en: Jotai atoms are defined outside of components and can be used in **Client Components** via hooks like `useAtom`, `useAtomValue`, or `useSetAtom`. It doesn't strictly require a Provider for basic usage, but a `Provider` can be used to scope state to a specific component tree or for SSR hydration.
- vi: Các Jotai atom được định nghĩa bên ngoài component và có thể được sử dụng trong các **Client Component** thông qua các hook như `useAtom`, `useAtomValue` hoặc `useSetAtom`. Nó không bắt buộc phải có Provider cho việc sử dụng cơ bản, nhưng `Provider` có thể được sử dụng để giới hạn phạm vi trạng thái cho một cây component cụ thể hoặc cho quá trình hydration trong SSR.
- vi: Các Jotai atom được định nghĩa bên ngoài component và có thể được sử dụng trong các **Client Component** thông qua các hook như `useAtom`, `useAtomValue` hoặc `useSetAtom`. Nó không bắt buộc phải có Provider cho việc sử dụng cơ bản, nhưng `Provider` có thể được sử dụng để giới hạn phạm vi trạng thái cho một cây component cụ thể hoặc cho quá trình hydration trong SSR.

### Jotai Persistence

**Does Jotai have a feature like redux-persist?**:
- en: Yes. Jotai provides a utility called `atomWithStorage` in the `jotai/utils` bundle. It allows you to create atoms that automatically synchronize their state with `localStorage`, `sessionStorage`, or even a custom storage interface.
- vi: Có. Jotai cung cấp một tiện ích gọi là `atomWithStorage` trong gói `jotai/utils`. Nó cho phép bạn tạo các atom tự động đồng bộ hóa trạng thái của chúng với `localStorage`, `sessionStorage` hoặc thậm chí là một giao diện lưu trữ tùy chỉnh.

**What are the benefits of Jotai's persistence approach?**:
- en: Its benefit lies in its "bottom-up" simplicity. You don't need to configure a root persistence config for the whole app. You can choose exactly which piece of state (which atom) should be persistent simply by changing the function name. It also has built-in support for SSR hydration.
- vi: Lợi ích của nó nằm ở sự đơn giản "từ dưới lên". Bạn không cần cấu hình một persist config gốc cho toàn bộ ứng dụng. Bạn có thể chọn chính xác phần trạng thái nào (atom nào) cần được lưu trữ đơn giản bằng cách thay đổi tên hàm. Nó cũng tích hợp sẵn hỗ trợ cho quá trình hydration trong SSR.
