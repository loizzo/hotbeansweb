// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Hot Beans Web",
  "url": "https://hotbeansweb.com",
  "logo": "https://hotbeansweb.com/img/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Recruitment",
    "email": "careers@hotbeansweb.com"
  }
};

// Job Posting Schemas 
const jobPostings = [

  {  // Marketing Director Schema
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Marketing Director",
    "description": "We are looking for an experienced Marketing Director to lead our marketing team and drive strategic initiatives.",
    "datePosted": "2025-05-11",
    "validThrough": "2025-06-11T23:59",
    "employmentType": "Full-time",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Hot Beans Web",
      "sameAs": "https://hotbeansweb.com",
      "logo": "https://hotbeansweb.com/img/logo.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Tech Street",
        "addressLocality": "London",
        "postalCode": "W1A 1AB",
        "addressCountry": "GB"
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "United Kingdom"
    }
  },

  { // Project Manager Schema
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Project Manager",
    "description": "We are hiring a Project Manager to lead cross-functional teams and ensure timely delivery of client projects.",
    "datePosted": "2025-05-11",
    "validThrough": "2025-06-11T23:59",
    "employmentType": "Full-time",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Hot Beans Web",
      "sameAs": "https://hotbeansweb.com",
      "logo": "https://hotbeansweb.com/img/logo.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Tech Street",
        "addressLocality": "London",
        "postalCode": "W1A 1AB",
        "addressCountry": "GB"
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "United Kingdom"
    }
  },
  
  { // UI/UX Designer Schema
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "UI/UX Designer",
    "description": "Looking for a creative and skilled UI/UX Designer to create intuitive and beautiful user experiences for our products.",
    "datePosted": "2025-05-11",
    "validThrough": "2025-06-11T23:59",
    "employmentType": "Full-time",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Hot Beans Web",
      "sameAs": "https://hotbeansweb.com",
      "logo": "https://hotbeansweb.com/img/logo.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Remote",
        "addressCountry": "GB"
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "United Kingdom"
    }
  },

  { // Frotend Developer Schema
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Frontend Developer",
    "description": "We are hiring a Frontend Developer to build responsive and interactive user interfaces for our web applications.",
    "datePosted": "2025-05-11",
    "validThrough": "2025-06-11T23:59",
    "employmentType": "Full-time",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Hot Beans Web",
      "sameAs": "https://hotbeansweb.com",
      "logo": "https://hotbeansweb.com/img/logo.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Tech Street",
        "addressLocality": "Swindon",
        "postalCode": "SN1 1AB",
        "addressCountry": "GB"
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "United Kingdom"
    }
  },

  { // Backend Developer Schema
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Backend Developer",
    "description": "We are looking for a Backend Developer to manage and build the server-side of web applications, working with databases, APIs, and more.",
    "datePosted": "2025-05-11",
    "validThrough": "2025-06-11T23:59",
    "employmentType": "Full-time",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Hot Beans Web",
      "sameAs": "https://hotbeansweb.com",
      "logo": "https://hotbeansweb.com/img/logo.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Remote",
        "addressCountry": "GB"
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "United Kingdom"
    }
  },
   
  { // Software Engineer Schema
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Software Engineer",
    "description": "We are hiring a Software Engineer to work on scalable, high-performance systems. Proficiency in server-side languages and systems is essential.",
    "datePosted": "2025-05-11",
    "validThrough": "2025-06-11T23:59",
    "employmentType": "Full-time",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Hot Beans Web",
      "sameAs": "https://hotbeansweb.com",
      "logo": "https://hotbeansweb.com/img/logo.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Tech Street",
        "addressLocality": "London",
        "postalCode": "W1A 1AB",
        "addressCountry": "GB"
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "United Kingdom"
    }
  }
];

// Create script elements
const orgScript = document.createElement('script');
orgScript.type = 'application/ld+json';
orgScript.innerHTML = JSON.stringify(organizationSchema);

// Append the schema
document.head.appendChild(orgScript);

// Loop through each job posting and create script elements for each one
jobPostings.forEach(jobPosting => {
  const jobScript = document.createElement('script');
  jobScript.type = 'application/ld+json';
  jobScript.innerHTML = JSON.stringify(jobPosting);
  document.head.appendChild(jobScript);
});
