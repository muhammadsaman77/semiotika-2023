function AuthorGuideline() {
  return (
    <>
      <div className="bg-primary-blue text-mono-white px-24 py-10 sm:pl-12 sm:pr-6 sm:py-5">
        {/* <div className="relative"> */}
        <h1
          id="author-guideline"
          className="text-left  text-3xl font-bold mb-3 border-b-4 border-primary-yellow inline-block sm:text-xl"
        >
          Author Guideline
        </h1>
        <ol className="list-decimal text-lg sm:text-base sm:leading-7 leading-8 text-justify">
          <li>
            Makalah belum pernah diterbitkan atau tidak dalam proses pengajuan
            untuk publikasi ke media lain dan tidak mengandung unsur
            plagiarisme;
          </li>
          <li>
            Makalah akan diterbitkan di e-prosiding/e-journal Equiva dan Jurnal
            SPECTA ITK (selected paper) setelah direview oleh peer reviewer dan
            disetujui oleh tim editorial.
          </li>
          <li>
            Makalah harus relevan dengan topik penelitian yang telah ditentukan
            (topik dapat dilihat{" "}
            <a className="underline text-primary-yellow" href="/#topics">
              disini
            </a>
            );
          </li>
          <li>
            Makalah ditulis sesuai dengan format yang telah ditentukan (format
            dapat diunduh{" "}
            <a
              className="underline text-primary-yellow"
              href="https://docs.google.com/document/d/1Pcgd7MbCb46ym0IWrnyeb2_JkFyUhNHp/edit?usp=sharing&ouid=108468419628199996421&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
            >
              disini
            </a>
            );
          </li>
          <li>Banyak halaman tidak melebihi 12 lembar dengan format A4;</li>
          <li>Daftar Pustaka tidak lebih dari 10 tahun;</li>
          <li>
            Penulis harus menyertakan alamat korespondensi dengan alamat email
            aktif dari penulis.
          </li>
          <li>
            Makalah lengkap harus diserahkan dalam WORD ke SEMIOTIKA Open
            Journal
            <a
              className="text-primary-yellow block sm:overflow-x-auto  underline"
              href="https://forms.gle/ag6wRbKYXfaoQasg6"
            >
              https://forms.gle/ag6wRbKYXfaoQasg6
            </a>
          </li>
          <li>
            Makalah yang diterima harus didaftarkan dan dipresentasikan pada
            konferensi oleh setidaknya satu penulis
          </li>
        </ol>
        {/* </div> */}
      </div>
    </>
  );
}

export default AuthorGuideline;
