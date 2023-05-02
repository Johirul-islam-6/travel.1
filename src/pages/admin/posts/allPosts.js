import Head from "next/head";
import AdminSidebar from "../../../../components/admin/adminSidebar";
import { RiMessage2Fill } from "react-icons/ri";

const allPosts = () => {
  const posts = [
    {
      id: "1",
      title: "Archaeological Rest House",
      author: "Abul",
      Categories: "Rest House",
      tags: "tour",
      commentNumber: "6",
      publishDate: "01-03-2023",
    },
    {
      id: "2",
      title: "Red Chillies Restaurant a",
      author: "Babul",
      Categories: "Restaurant",
      tags: "tour",
      commentNumber: "3",
      publishDate: "15-03-2023",
    },
    {
      id: "3",
      title: "Hotel Eden Park",
      author: "Kabul",
      Categories: "Restaurant",
      tags: "tour",
      commentNumber: "1",
      publishDate: "20-03-2023",
    },
  ];
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <div className="h-screen block lg:flex justify-between">
        <div className="w-[100%] lg:w-[20%] h-14 lg:h-screen flex justify-between">
          <AdminSidebar />
        </div>
        <div className="w-[100%] lg:w-[80%] bg-slate-100 py-10 px-10">
          {/* -------------body content Start------------------ */}
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr className="bg-blue-700">
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Categories</th>
                  <th>Tags</th>
                  <th>
                    <RiMessage2Fill />
                  </th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {posts.map((post) => {
                  return (
                    <tr key={post.id}>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>{post.title}</td>
                      <td>{post.author}</td>
                      <td>{post.Categories}</td>
                      <td>{post.tags}</td>
                      <td>{post.commentNumber}</td>
                      <td>{post.publishDate}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* -------------body content End------------------ */}
        </div>
      </div>
    </>
  );
};

export default allPosts;

allPosts.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
