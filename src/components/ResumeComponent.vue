<template>
  <div class="m-6 font-mono flex flex-col items-center">
    <div class="m-4 text-center">
      <p class="border border-blue-500 rounded px-2 animate-pulse">This website is built using Vue.js and tailwindcss, hosted on AWS EC2</p>
    </div>
    <div class="max-w-4xl">
      <div class="rounded overflow-hidden shadow-lg border-blue-500 border p-4 bg-orange-50 my-4">
        <div class="flex flex-col items-center text-center">
          <p>
            <img
              class="rounded mb-3"
              style="font-size: 1em;"
              src="../assets/my_photo.jpg"
              alt="photo"
            >
          </p>
          <h1 class="text-6xl font-extrabold">Jayant Porwal</h1>
          <h4 class="mt-4 text-lg font-semibold">Sr. Consultant, Developer at ThoughtWorks</h4>
          <div class="flex flex-row justify-center flex-wrap text-center mt-4">
            <h5 class="font-semibold">Experience:&nbsp;</h5>
            <h5 class="font-semibold border border-blue-500 rounded px-2 hover:bg-blue-300 transition delay-150">{{ experience }}</h5>
          </div>
        </div>
        <hr class="m-4 border-1 border-blue-500">
        <div class="flex flex-row justify-center flex-wrap text-center">
          <p class="text-sm font-semibold">jayantporwal05@gmail.com</p>
          <p class="text-lg">&nbsp;&nbsp;</p>
          <a
            class="text-sm font-semibold underline 
                            hover:underline-offset-2 hover:decoration-blue-500 
                            transition delay-150"
            href="https://www.linkedin.com/in/jporwal05/"
          >LinkedIn</a>
          <p class="text-lg">&nbsp;&nbsp;</p>
          <a
            class="text-sm font-semibold underline 
                            hover:underline-offset-2 hover:decoration-blue-500 
                            transition delay-150"
            href="https://medium.com/@jayantporwal05"
          >Medium</a>
          <p class="text-lg">&nbsp;&nbsp;</p>
          <p class="text-sm font-semibold">+91-8698033662</p>
        </div>

        <div class="flex flex-row justify-center flex-wrap text-center mt-4">
          <p class="text-sm font-semibold border border-blue-500 rounded px-2 hover:bg-blue-300 transition delay-150">Remote</p>
          <p class="text-sm font-semibold">&nbsp;or&nbsp;</p>
          <p class="text-sm font-semibold border border-blue-500 rounded px-2 hover:bg-blue-300 transition delay-150">Indore, India</p>
          <p class="text-sm font-semibold">&nbsp;only&nbsp;</p>
        </div>

      </div>

      <div class="flex flex-col items-center text-center mt-10">
        <p class="text-4xl font-bold">Objective</p>
        <p class="text-lg text-justify mt-4">To work for an organization where I can contribute my skills and understand the responsibilities and
          strive for collective growth and development working together with my colleagues as a team, always
          keeping organization goals as priority.</p>
      </div>

      <div class="flex flex-col items-center text-center mt-10">
        <p class="text-4xl font-bold">Technologies</p>
        <p class="text-lg text-justify mt-4">Java, Spring, Spring Boot, Hibernate, Microservices, Kibana, Grafana, PinPoint, Apache Kafka, Apache
          Zeppelin, Jenkins, Git, Maven, Intellij Idea, MySQL, Design, OOP, SOLID principles, Oracle, Apache
          ShardingSphere, Apache Camel</p>
      </div>

      <div class="flex flex-col items-center text-center mt-10">
        <p class="text-4xl font-bold">Unique Selling Point</p>
        <p class="text-lg text-justify mt-4">A fast learner who can learn any modern technology at a faster pace as per project needs. A team
          player who always shares his knowledge so that everyone can grow together. I also have good data
          analytical skills.</p>
      </div>

      <div class="flex flex-col items-center text-center mt-10">
        <p class="text-4xl font-bold text-center">Professional Summary</p>
        <p class="text-lg text-justify mt-4">Backend Java developer having experience in developing standalone
          applications as well as production ready enterprise applications to meet the business and client needs
          while keeping sense of latest technologies and DevOps methodologies. Someone who is not restricted
          by technology and open to learning any modern technology that adds value. Shares knowledge among
          the team to elevate everybody around and takes ownership of a given piece of work taking care of
          end-to-end communication, requirement gathering, design, development, testing, and postproduction
          support.</p>
      </div>

      <div class="flex flex-col items-center text-center mt-10">
        <div>
          <p class="text-4xl font-bold">Experience</p>
        </div>
        <div class="text-center">
          <div class="flex flex-col font-semibold text-blue-500 items-center mt-4">
            <div>
              <p class="text-sm">Trainee Software Engineer — HSBC</p>
            </div>
            <div>
              <p class="text-xs mt-2">Aug 2012 — Mar 2013</p>
            </div>
          </div>
          <div>
            <p class="text-lg text-justify mt-4">Built a framework using Core Java and XSLT to make the bank compliant with
              Dodd Frank Act for Regulatory Reporting.</p>
          </div>
        </div>
        <hr class="flex-shrink-0 w-full mt-4 border-1 border-blue-500">
        <div>
          <div class="flex flex-col font-semibold text-blue-500 items-center mt-4">
            <div>
              <p class="text-sm">Software Engineer — HSBC</p>
            </div>
            <div>
              <p class="text-xs text-center mt-2">Apr 2013 — Oct 2015</p>
            </div>
          </div>
          <div>
            <p class="text-lg text-justify mt-4">Developed a multithreaded xml comparison tool to compare trade xml(s) in
              bulk. Scaled the already developed reporting framework to make room for
              more regulations and requirements.</p>
          </div>
        </div>
        <hr class="flex-shrink-0 w-full mt-4 border-1 border-blue-500">
        <div>
          <div class="flex flex-col font-semibold text-blue-500 items-center mt-4">
            <div>
              <p class="text-sm">Senior Software Engineer — HSBC</p>
            </div>
            <div>
              <p class="text-xs text-center mt-2">Nov 2015 – Mar 2018</p>
            </div>
          </div>
          <div>
            <p class="text-lg text-justify mt-4">Travelled to London to co-ordinate the production release of a new product.
              Worked in writing a new project from scratch by writing proof of concepts
              for modern technologies including gRPC, MongoDB, ReactJS, Swagger-UI and
              picking up the most suited.</p>
          </div>
        </div>
        <hr class="flex-shrink-0 w-full mt-4 border-1 border-blue-500">
        <div>
          <div class="flex flex-col font-semibold text-blue-500 items-center mt-4">
            <div>
              <p class="text-sm">Senior Software Analyst — Barclays</p>
            </div>
            <div>
              <p class="text-xs text-center mt-2">Apr 2018 – May 2019</p>
            </div>
          </div>
          <div>
            <p class="text-lg text-justify mt-4">Worked on developing a high performant and stable RESTful microservice
              that would get trade XML(s) from a data store using REST and send them on
              queue with headers as per requirement using Apache Camel. Developed a
              field validation framework for validating fields in a Java object.</p>
          </div>
        </div>
        <hr class="flex-shrink-0 w-full mt-4 border-1 border-blue-500">
        <div>
          <div class="flex flex-col font-semibold text-blue-500 items-center mt-4">
            <div>
              <p class="text-sm">Technical Lead — Worldpay from FIS</p>
            </div>
            <div>
              <p class="text-xs text-center mt-2">Jun 2019 – May 2021</p>
            </div>
          </div>
          <div>
            <p class="text-lg text-justify mt-4">Designed and led the work on software upgrade module and auto boarding
              of merchants on our Integrated Payment Client commonly known as IPC. The
              tech stack was spring-kafka and was developed using microservice
              architecture.</p>
          </div>
        </div>
        <hr class="flex-shrink-0 w-full mt-4 border-1 border-blue-500">
        <div>
          <div class="flex flex-col font-semibold text-blue-500 items-center mt-4">
            <div>
              <p class="text-sm">Staff Engineer — Nagarro</p>
            </div>
            <div>
              <p class="text-xs text-center mt-2">May 2021 - May 2022</p>
            </div>
          </div>
          <div>
            <p class="text-lg text-justify mt-4">Designed two major payments/refunds related features for an Indian e-
              commerce giant and lead the work on writing clean and re-usable code so
              that the code is extensible and scalable in future. Voluntarily analyzed data
              from data lake and fixed many payments and refunds related issues that were
              existing in the system and improved customer experience significantly.</p>
          </div>
        </div>
        <hr class="flex-shrink-0 w-full mt-4 border-1 border-blue-500">
        <div>
          <div class="flex flex-col font-semibold text-blue-500 items-center mt-4">
            <div>
              <p class="text-sm">Sr. Consultant, Developer — ThoughtWorks</p>
            </div>
            <div>
              <p class="text-xs text-center mt-2">May 2022 - Present</p>
            </div>
          </div>
          <div>
            <p class="text-lg text-justify mt-4">Co-designed and developed a Health Campaign Management System for a client in the
              Digital Public Goods(DPG) space to allow more than 30 countries to run different Health Campaigns coherently using
              a single platform. The USP of the platform is that it can work in offline mode.
            </p>
          </div>
        </div>
        <hr class="flex-shrink-0 w-full mt-4 border-1 border-blue-500">
      </div>
      <div class="flex flex-col items-center text-center mt-10">
        <div>
          <p class="text-4xl font-bold">Education</p>
        </div>
        <div>
          <div class="font-semibold text-blue-500 mt-4">
            <div>
              <p class="text-sm">Chameli Devi Group of Institutions</p>
            </div>
            <div>
              <p class="text-xs mt-2">2012</p>
            </div>
          </div>
          <div class="font-semibold text-blue-500 mt-4">
            <div>
              <p class="text-sm">B.E. - Computer Science and Engineering</p>
            </div>
            <div>
              <p class="text-xs mt-2">CGPA 7.0</p>
            </div>
          </div>
          <div>
            <p class="text-sm mt-4">Indore, Madhya Pradesh, India</p>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center text-center mt-10">
        <p class="text-4xl font-bold">Communication</p>
        <p class="text-lg text-justify mt-4">I can deliver crisp and clear presentations; may it be design proposals or solution proposals. I like to
          document as much as possible so that it is easy to share knowledge, do root cause analysis or back track.</p>
      </div>

      <div class="flex flex-col items-center text-center mt-10">
        <p class="text-4xl font-bold">Currently Learning</p>
        <p class="text-lg text-justify mt-4">Vue.js, tailwindcss, go and pursuing AWS Developer Associate Certification(26th April, 2023)</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ResumeComponent",
  data() {
    return {
      startDate: new Date("2012-08-01"), // Start date as a Date object
    };
  },
  computed: {
    experience() {
      // Current date as a Date object (defaults to current date)
      var endDate = new Date();

      // Calculate the difference in years and months
      var years = endDate.getFullYear() - this.startDate.getFullYear();
      var months = endDate.getMonth() - this.startDate.getMonth();
      if (months < 0) {
        years--;
        months += 12;
      }

      // Format the result string
      var result = "";
      if (years > 0) {
        result += years + " year" + (years > 1 ? "s" : "");
      }
      if (years > 0 && months > 0) {
        result += " and ";
      }
      if (months > 0) {
        result += months + " month" + (months > 1 ? "s" : "");
      }

      return result;
    },
  },
  mounted() {
    this.$gtag.pageview({
      page_title: "Jayant Porwal - Java",
      page_location: "http://jpswcons.in",
      page_path: "/",
    });
  },
};
</script>
