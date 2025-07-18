import ProjectCard from '../_components/ProjectCard'

export default function Dandyar() {

  const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    className="text-white"
  >
    <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.084 3.292 9.387 7.861 10.911.575.104.787-.25.787-.556 0-.275-.01-1.007-.015-1.977-3.2.695-3.875-1.54-3.875-1.54-.524-1.332-1.28-1.687-1.28-1.687-1.046-.715.08-.7.08-.7 1.158.082 1.768 1.188 1.768 1.188 1.028 1.76 2.697 1.251 3.353.957.103-.744.403-1.251.732-1.539-2.554-.29-5.24-1.277-5.24-5.684 0-1.255.448-2.282 1.183-3.087-.12-.29-.512-1.457.113-3.037 0 0 .964-.309 3.16 1.18a11.023 11.023 0 0 1 2.877-.387c.975.005 1.958.131 2.877.387 2.193-1.49 3.154-1.18 3.154-1.18.628 1.58.235 2.747.115 3.037.738.805 1.182 1.832 1.182 3.087 0 4.418-2.691 5.39-5.253 5.674.415.357.785 1.061.785 2.14 0 1.547-.014 2.794-.014 3.174 0 .308.207.664.794.553C20.21 21.383 23.5 17.084 23.5 12c0-6.352-5.148-11.5-11.5-11.5Z" />
  </svg>
);

  return (
    <>
      <div className="w-full border border-white border-opacity-20 max-w-4xl mx-auto bg-black rounded-2xl shadow-2xl p-8 md:p-12 text-center mb-8">
            
            <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight mb-4">
              Projects
            </h1>
            
            <div className="w-24 h-1 bg-white bg-opacity-50 mx-auto my-6 rounded-full"></div>

            <p className="text-base md:text-lg leading-relaxed text-gray-200 mb-3">
                Below is a collection of projects I developed during my time in school.
These projects were primarily created as part of my learning journey to become a Full Stack Web Developer.
            </p>

        </div>
      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
        title="SE-Vote"
        description="A secure and responsive electronic voting web application built with CodeIgniter 3 and Twitter Bootstrap. Designed to facilitate online voting processes with user-friendly interfaces and reliable performance."
        href="https://github.com/dandyar/SE-Vote"
        icon={<GitHubIcon />}
        isExternal={true}
      />
      <ProjectCard
        title="Document Archiving"
        description="A web-based application developed to manage and archive incoming and outgoing official correspondence. It supports administrative needs by offering structured digital storage and easy retrieval of document records."
        href="https://github.com/dandyar/aplikasi-pengarsipan-surat"
        icon={<GitHubIcon />}
        isExternal={true}
      />
      <ProjectCard
        title="CI Inventory Item"
        description="An inventory management web application created with CodeIgniter 3 and Twitter Bootstrap. This system provides features for tracking, organizing, and managing item inventories efficiently."
        href="https://github.com/dandyar/ci-item-inventory"
        icon={<GitHubIcon />}
        isExternal={true}
      />
      <ProjectCard
        title="Online Dictionary"
        description="A simple CRUD-based web application developed using CodeIgniter 3 and Bootstrap 3. It features a responsive design and enables basic dictionary operations including adding, editing, and deleting entries."
        href="https://github.com/dandyar/kamus-online"
        icon={<GitHubIcon />}
        isExternal={true}
      />
      </div>
    </>
  );
}
