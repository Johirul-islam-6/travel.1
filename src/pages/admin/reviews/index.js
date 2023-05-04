import Head from "next/head";
import AdminSidebar from "../../../../components/admin/adminSidebar";
import { RiMessage2Fill } from "react-icons/ri";
import Link from "next/link";

const Reviews = () => {
  const posts = [
    {
      id: "1",
      author: "Abul",
      comment:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly",
      response: "Hello World",
      publishDate: "01-03-2023",
    },
    {
      id: "2",
      author: "Babul",
      comment:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly",
      response: "Hello World",
      publishDate: "15-03-2023",
    },
    {
      id: "3",
      author: "Kabul",
      comment:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly",
      response: "Hello World",
      publishDate: "20-03-2023",
    },
  ];
  return (
    <>
      <Head>
        <title>Review Page</title>
      </Head>
      <div className="h-screen block lg:flex justify-between">
        <div className="w-[100%] lg:w-[20%] h-14 lg:h-screen flex justify-between">
          <AdminSidebar />
        </div>
        <div className="w-[100%] lg:w-[80%] bg-slate-100 py-10 px-10">
          {/* -------------body content Start------------------ */}
          <div className="overflow-x-auto text-black">
            {/* ---------------Edit Comment---------------- */}
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
              <form class="w-full max-w-sm bg-slate-50 p-5">
                <h1 className="text-center -mb-2">Author</h1>
                <div className="divider"></div>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      for="inline-full-name"
                    >
                      Name
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input
                      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                      value="Jane Doe"
                    />
                  </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      for="inline-password"
                    >
                      Email
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input
                      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-password"
                      type="password"
                      placeholder="demo@gmail.com"
                    />
                  </div>
                </div>
              </form>
              <div></div>
            </div>
            {/* -----------Show All comments----------- */}
            <div className="text-sm pb-2">
              <span className="text-blue-800 hover:cursor-pointer">
                All (1)
              </span>{" "}
              |{" "}
              <span className="text-blue-800 hover:cursor-pointer">
                Pending (0)
              </span>{" "}
              |{" "}
              <span className="text-blue-800 hover:cursor-pointer">
                Approved (1)
              </span>{" "}
              |{" "}
              <span className="text-blue-800 hover:cursor-pointer">
                Delete (0)
              </span>
            </div>
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr className="bg-blue-700">
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Author</th>
                  <th>Comment</th>
                  <th>In response to</th>
                  <th>Submitted On</th>
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
                      <td>{post.author}</td>
                      <td>
                        {post.comment.slice(0, 15) + "..."}
                        <div className="text-sm text-gray-400">
                          <span className="hover:text-blue-800 hover:cursor-pointer">
                            Unapprove
                          </span>{" "}
                          |{" "}
                          <span className="hover:text-blue-800 hover:cursor-pointer">
                            Replay
                          </span>{" "}
                          |{" "}
                          <span className="hover:text-blue-800 hover:cursor-pointer">
                            Edit
                          </span>{" "}
                          |{" "}
                          <span className="hover:text-blue-800 hover:cursor-pointer">
                            View
                          </span>{" "}
                          |{" "}
                          <span className="hover:text-red-600 hover:cursor-pointer">
                            Delete
                          </span>{" "}
                        </div>
                      </td>
                      <td>
                        {post.response}
                        <div className="text-sm text-gray-400 hover:text-green-600">
                          <Link href="/">View Post</Link>
                        </div>
                        <div className="text-sm text-gray-400">1</div>
                      </td>
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

export default Reviews;

Reviews.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
