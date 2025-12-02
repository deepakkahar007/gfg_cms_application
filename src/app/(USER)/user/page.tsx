import ImageComp from "@/components/ImageComp";
import { Bookmark } from "lucide-react";

const UserPage = () => {
  return (
    <main className="flex-1 p-10 bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      {/* Page Heading */}
      <div className="flex flex-wrap justify-between gap-3 mb-6">
        <div className="flex min-w-72 flex-col gap-2">
          <p className="text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-tight">
            Saved Blogs
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-base">
            A collection of your favorite articles and stories.
          </p>
        </div>
      </div>

      {/* Toolbar + Search */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        {/* Search Bar */}
        <div className="w-full md:w-auto">
          <label className="flex flex-col h-12 w-full max-w-sm">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-gray-400 dark:text-gray-500 flex border border-r-0 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 items-center justify-center pl-4 rounded-l-lg">
                <span className="material-symbols-outlined !fill-0 !text-2xl">
                  search
                </span>
              </div>

              <input
                placeholder="Filter saved blogs by title or keyword"
                className="form-input flex w-full flex-1 text-gray-900 dark:text-white bg-white dark:bg-gray-900/50 border border-l-0 border-gray-200 dark:border-gray-800 focus:ring-primary/50 focus:outline-0 px-4 rounded-l-none text-sm"
              />
            </div>
          </label>
        </div>

        {/* View Toggle */}
        <div className="flex gap-2 p-1 bg-white dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-800">
          <button className="p-2 rounded-md text-white bg-primary">
            <span className="material-symbols-outlined !fill-0 !text-xl">
              grid_view
            </span>
          </button>

          <button className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined !fill-0 !text-xl">
              view_list
            </span>
          </button>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* CARD 1 */}
        <div className="group relative flex flex-col overflow-hidden rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 hover:shadow-lg dark:hover:border-gray-700 transition-all duration-300">
          <div className="aspect-video w-full">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGVnZwp5AyqRSmwz9hl3_TrxxvhKiAbB_9UT9uBNAMi4X0PccFBKHoygCph8JH1TVqfKQRzrAoFblyu3aEibLDjtPFBFg8-llyIVKZTxTBIUgzyinMms59VZLt3VcHyPgCiHrFuHpcm4pXEFxGoVSI192OmHEY5dXd4Z6wQcaC1KY1_Bxg_aIkHGK3Qj0aFv1RYSFFNyZjkT84pobyh-xBItp4KLPfdN0n-VOac0ghkM7THRcpd0QIytU1EbCVYEOpYYQlZlSL9qd3"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              The Future of Web Development
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-1">
              An in-depth look at emerging trends, from serverless architecture
              to AI-powered assistants.
            </p>

            <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
              <span>Jane Smith</span> • <span>Oct 24, 2023</span>
            </div>
          </div>

          <button className="absolute top-3 right-3 flex items-center justify-center size-8 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined text-lg!">
              <Bookmark />
            </span>
          </button>
        </div>

        {/* CARD 2 */}
        <div className="group relative flex flex-col overflow-hidden rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 hover:shadow-lg dark:hover:border-gray-700 transition-all duration-300">
          <div className="aspect-video w-full">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmamRamUctEWupMzOCq83743ov493SuyQAj3Jc5cz4NikIkFzNoKi1WLUN4luWPswgNFW3NQGv2t9_lvC4e9Fw-1VmoLxaS9Raex-rI8S_sahIvFTPtG6NZRya50Bsazkt8cwghE9GZpVws0esPMNr31NXP3JtLYdhmxdDNarrSSmwxBiJL6SuhFfVAK0BUbOZN3IV1Ht4oaJY61wpyEiRM__heYq99TM9qhrcQQCyxwSR_eekAfDwfsgIAYlkXi0iBqKxcLBFwH8W"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Mastering Data Visualization
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-1">
              Learn how to tell compelling stories with your data through
              effective, beautiful visualizations.
            </p>

            <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
              <span>Alex Johnson</span> • <span>Oct 22, 2023</span>
            </div>
          </div>

          <button className="absolute top-3 right-3 flex items-center justify-center size-8 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined text-lg!">
              <Bookmark />
            </span>
          </button>
        </div>

        {/* CARD 3 */}
        <div className="group relative flex flex-col overflow-hidden rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 hover:shadow-lg dark:hover:border-gray-700 transition-all duration-300">
          <div className="aspect-video w-full">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmamRamUctEWupMzOCq83743ov493SuyQAj3Jc5cz4NikIkFzNoKi1WLUN4luWPswgNFW3NQGv2t9_lvC4e9Fw-1VmoLxaS9Raex-rI8S_sahIvFTPtG6NZRya50Bsazkt8cwghE9GZpVws0esPMNr31NXP3JtLYdhmxdDNarrSSmwxBiJL6SuhFfVAK0BUbOZN3IV1Ht4oaJY61wpyEiRM__heYq99TM9qhrcQQCyxwSR_eekAfDwfsgIAYlkXi0iBqKxcLBFwH8W"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Productivity Hacks for Creatives
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-1">
              Unlock your creative potential by optimizing your workflow with
              these powerful strategies.
            </p>

            <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
              <span>Emily White</span> • <span>Oct 20, 2023</span>
            </div>
          </div>

          <button className="absolute top-3 right-3 flex items-center justify-center size-8 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined text-lg!">
              <Bookmark />
            </span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default UserPage;
