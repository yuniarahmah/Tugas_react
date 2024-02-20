import React from "react";
import { Card } from "react-bootstrap";

function Visi() {
  return (
    <>
      <h1>VISI & MISI SEKOLAH</h1>
      <div style={{ display: "flex", gap: "2%" }}>
        <div
          style={{
            width: "45%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
            //   marginLeft: "35%",
          }}
        >
          <Card>
            <Card.Img
              variant="top"
              src="https://sman5mandau.sch.id/storage/sman5mandau.sch.id/editor/TyGYc1RYhri7Ip3EDbvZUMsSj64mbgobGRVgIwo8.jpg"
            />
          </Card>
        </div>
        <div
          style={{
            width: "45%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
            //   marginLeft: "35%",
          }}
        >
          <Card>
            <Card.Img
              variant="top"
              src="https://siwalimanews.com/wp-content/uploads/2022/02/smk-450x299.jpg"
            />
          </Card>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div
          style={{
            marginTop: "5%",
            marginLeft: "3%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Card style={{ width: "18rem" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>VISI SEKOLAH</Card.Title>
              <Card.Text>
                1. Terwujudnya insan yang berkarakter, unggul dalam prestasi,
                berwawasan global, dan peduli lingkungan
              </Card.Text>
              <Card.Text>
                2. Terwujudnya pendidikan yang mengedepankan karakter
                pembentukan Profil Pelajar Pancasila
              </Card.Text>
              <Card.Text>
                3. Terwujudnya pendidikan yang mengedepankan karakter
                pembentukan Profil Pelajar Pancasila.
              </Card.Text>
              <Card.Text>
                4. Terwujudnya prestasi peserta didik yang unggul dalam akademik
                dan non akademik.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div
          style={{
            marginTop: "5%",
            marginLeft: "8%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Card style={{ width: "18rem" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>MISI SEKOLAH</Card.Title>
              <Card.Text>
                1. Mewujudkan tata kelola pemerintahan yang lebih bersih,
                efektif, efisien, dan akuntabel
              </Card.Text>
              <Card.Text>
                2. Mengakselerasi pembangunan infrastruktur strategis,
                kewilayahan dan meningkatkan keterpaduan perkembangan kota dan
                desa
              </Card.Text>
              <Card.Text>
                3. Mewujudkan kualitas pelayanan Investasi dan meningkatkan
                kualitas pelayanan publik
              </Card.Text>
              <Card.Text>
                4. Mengembangkan kapasitas pemuda, olahraga, seni-budaya,
                meningkatkan keberdayaan perempuan, perlindungan anak dan
                mengendalikan pertumbuhan penduduk
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div
          style={{
            marginTop: "5%",
            marginLeft: "8%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Card style={{ width: "18rem" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>KARAKTER YANG AKAN DIBANGUN SEKOLAH</Card.Title>
              <Card.Text>
                1. Membangun dan menguatkan kesadaran mengenai akan habisnya dan
                rusaknya sumber daya alam di Indonesia
              </Card.Text>
              <Card.Text>
                2. Membangun dan menguatkan kesadaran serta keyakinan bahwa
                tidak ada keberhasilan sejati di luar kebijakan.
              </Card.Text>
              <Card.Text>
                3. Membangun kesadaran dan keyakinan bahwa kebhinekaan sebagai
                hal yang kodrati dan sumber kemajuan.
              </Card.Text>
              <Card.Text>
                4. Membangun kesadaran dan menguatkan kayakinan bahwa tidak ada
                martabat yang dapat dibangun dengan menadahkan tangan.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Visi;
