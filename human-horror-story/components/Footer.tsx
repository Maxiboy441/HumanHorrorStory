"use client";

import React, { useState } from "react";

const Footer = () => {
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="pb-16 pt-12 w-screen bg-black-400 text-center text-sm text-neutral-300">
      {/* Buttons for Impressum and Privacy Policy */}
      <div className="mt-8 space-x-4">
        <button
          className="bg-transparent border-2 border-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          onClick={() => setIsImpressumOpen(true)}
          data-umami-event="Open Impress"
        >
          Impressum
        </button>
        <button
          className="bg-transparent border-2 border-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          onClick={() => setIsPrivacyOpen(true)}
          data-umami-event="Open Privacy Policy"
        >
          Privacy Policy
        </button>
      </div>

      {/* Modal for Impressum */}
      {isImpressumOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="w-96 p-6 rounded-lg max-h-[80vh] overflow-auto bg-gray-800 text-white z-60">
            <h2 className="text-xl font-bold">Impressum</h2>
            <p className="mt-4">
              Maximilian Huber <br />
              Rümpflestr. 14/1
              <br />
              71665 Horrheim <br />
              <a href="mailto:Maxiboy44YT@gmail.com">Maxiboy44YT@gmail.com</a>
              <br />
              <br />
              <strong>Disclaimer:</strong>
              <br />
              <br />
              <strong>Liability for content</strong>
              <br />
              <br />
              The contents of our pages were created with the utmost care.
              However, we cannot guarantee the accuracy, completeness, and
              timeliness of the contents. As a service provider, we are
              responsible for our own content on these pages according to
              general laws per § 7 paragraph 1 TMG. However, according to §§ 8
              to 10 TMG, we are not obligated as a service provider to monitor
              transmitted or stored third-party information or to investigate
              circumstances that indicate illegal activity. Obligations to
              remove or block the use of information under general laws remain
              unaffected. Liability in this regard is, however, only possible
              from the time of knowledge of a specific infringement. Upon
              notification of such violations, we will remove this content
              immediately.
              <br />
              <br />
              <strong>Liability for links</strong>
              <br />
              <br />
              Our offer contains links to external websites of third parties
              over whose contents we have no influence. Therefore, we cannot
              assume any liability for these external contents. The respective
              provider or operator of the pages is always responsible for the
              contents of the linked pages. The linked pages were checked for
              possible legal violations at the time of linking. Illegal contents
              were not recognizable at the time of linking. However, permanent
              control of the content of the linked pages is not reasonable
              without concrete evidence of a violation. Upon notification of
              violations, we will remove such links immediately.
              <br />
              <br />
              <strong>External Sources</strong>
              <br />
              <br />
              &quot;www.google.com&quot;, &quot;images.unsplash.com&quot;,
              &quot;github.com&quot;,
              &quot;user-images.githubusercontent.com&quot;,
              &quot;assets.aceternity.com&quot;, &quot;m.media-amazon.com&quot;,
              &quot;cdn.pixabay.com&quot;, &quot;www.citypng.com&quot;,
              &quot;www.opc-router.de&quot;, &quot;www.bujarra.com&quot;,
              &quot;encrypted-tbn0.gstatic.com&quot;,
              &quot;www.rlogical.com&quot;, &quot;ui.aceternity.com&quot;,
              &quot;pbs.twimg.com&quot;, &quot;liersch.it&quot;,
              &quot;www.stuttgarter-nachrichten.de&quot;,
              &quot;www.kirbach-schule.de&quot;, &quot;www.lkz.de&quot;,
              &quot;cdn.prod.website-files.com&quot;,
              &quot;www.vaihingen.de&quot;,
              &quot;cdn-icons-png.flaticon.com&quot;, &quot;letsenhance.io&quot;
              &quot;cdn.worldvectorlogo.com&quot;,
              &quot;upload.wikimedia.org&quot;
              &quot;i.namu.wiki&quot;
              <br />
              <br />
              <strong>Data protection</strong>
              <br />
              <br />
              The use of our website is generally possible without providing
              personal data. As far as personal data (such as name, address, or
              email addresses) are collected on our pages, this is always done
              on a voluntary basis as much as possible. This data will not be
              passed on to third parties without your express consent. <br />
              We point out that data transmission over the Internet (e.g.,
              communication by email) can have security vulnerabilities.
              Complete protection of data from access by third parties is not
              possible. <br />
              <br />
              **Analytics via Umami**
              <br />
              <br />
              We use the analytics tool **Umami** to track website usage and
              improve the user experience. The data collected is anonymized and
              includes information such as page views, referrers, and browser
              data. We do not collect any personally identifiable information.
              For more details, refer to our Privacy Policy.
              <br />
              <br />
              The use of contact data published within the scope of the imprint
              obligation by third parties for sending unsolicited advertising
              and information materials is hereby expressly contradicted. The
              operators of the pages expressly reserve the right to take legal
              action in the event of unsolicited sending of advertising
              information, such as spam emails.
            </p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
              onClick={() => setIsImpressumOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Modal for Privacy Policy */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="w-96 p-6 rounded-lg max-h-[80vh] overflow-auto bg-gray-800 text-white z-60">
            <h2 className="text-xl font-bold">Privacy Policy</h2>
            <p className="mt-4">
              Your privacy is important to us. We do not collect or store any
              personal data. The only data we may collect are those
              automatically handled by Next.js for purposes such as analytics or
              functionality.
              <br />
              <br />
              The information that Next.js automatically handles may include:
              your IP address, user agent, and interaction with our website
              (such as page views and click behavior). This data is anonymized
              and cannot be used to personally identify you.
              <br />
              <br />
              **Use of Umami Analytics**
              <br />
              <br />
              We use **Umami**, a privacy-friendly analytics tool, to track
              basic usage metrics on this website. Umami collects data such as
              your page views, referring site, and browser details, but does not
              collect personally identifiable information. All data is
              anonymized to ensure your privacy. We do not store any personal
              information or share the collected data with third parties.
              <br />
              <br />
              If you wish to opt out of analytics tracking, you can disable
              JavaScript in your browser, or use browser extensions that block
              analytics scripts.
              <br />
              <br />
              We do not share or sell any data to third parties.
              <br />
              <br />
              If you have any questions about this policy, feel free to contact
              us.
            </p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
              onClick={() => setIsPrivacyOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
