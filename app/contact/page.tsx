"use client";

import { useEffect } from "react";
import { SITE } from "@/config/site";
import { COLORS } from "@/config/theme";
import TypedHeader from "@/components/ui/TypedHeader";

export default function ContactPage() {
  useEffect(() => {
    const updateMailString = () => {
      const nameEl = document.getElementById("name") as HTMLInputElement | null;
      const mailText = document.getElementById("mailText") as HTMLTextAreaElement | null;
      const form = document.getElementById("mail-form") as HTMLFormElement | null;
      if (!nameEl || !mailText || !form) return;
      const senderText = "\n\n\n\nSender,\n" + nameEl.value;
      const name = encodeURIComponent(senderText);
      const email = encodeURIComponent(mailText.value);
      const mailString = "&body=" + email + name;
      form.action = "mailto:" + SITE.contact.email + "?subject=Intelligent Media Center" + mailString;
    };
    const mailText = document.getElementById("mailText");
    const handler = () => updateMailString();
    mailText?.addEventListener("focusout", handler);
    return () => mailText?.removeEventListener("focusout", handler);
  }, []);

  return (
    <>
      <TypedHeader text="Contact" />
      <div className="container">
        <div className="row maprow">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <h6 style={{ marginTop: 20 }}>
              <strong>Prof. Dr. Hafiz Ahmad Jalal</strong>, Head Incharge, IMC
            </h6>
            <h6>Associate Professor, AIR University, Islamabad</h6>
            <form id="mail-form" action={"mailto:" + SITE.contact.email + "?subject=New"} method="post" encType="text/plain">
              <br />
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" className="form-control" placeholder="Enter your full name..." />
              <br />
              <label htmlFor="mailText">Comment</label>
              <textarea
                name="mailText"
                id="mailText"
                className="form-control"
                style={{ resize: "none" }}
                rows={7}
                placeholder="Write your comments or inquiries here..."
              ></textarea>
              <br />
              <input type="submit" value="Send" className="btn text-white" style={{ backgroundColor: COLORS.navy }} />
            </form>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-4">
            <iframe
              id="map"
              src={SITE.contact.mapUrl}
              width="100%"
              height="360"
              frameBorder="0"
              style={{ border: "1px solid #99a1b2", borderRadius: 8, marginTop: 20 }}
              allowFullScreen={true}
              aria-hidden={false}
              tabIndex={0}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
