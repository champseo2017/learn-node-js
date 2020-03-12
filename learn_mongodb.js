/* 

รู้จักกับ crud operations
crud ย่อมาจาก create, read, update, delete ซึ้งเป็นคำสั่งพื้นฐานที่ใช้จัดการกับฐานข้อมูล โดยคำสั่ง create ใช้เพื่อเพิ่มข้อมูลลงในฐานข้อมูล read ใช้สำหรับอ่านข้อมูลจากฐานข้อมูล update ใช้เพื่อแก้ไขข้อมูลในฐานข้อมูล ส่วน delete ใช้เพื่อลบข้อมูลในฐานข้อมูล

Create ใช้เพิ่มข้อมูลลงในฐานข้อมูล ซึ้งมีให้เลือกใช้หลายแบบ เช่น
- createOne(data, options) เพิ่ม document ลงไปในฐานข้อมูลเพียงรายการเดียว

- createMany(data, options) เพิ่ม document ลงไปในฐานข้อมูลหลายรายการพร้อมกัน

Read คือ คำสั่งที่ใช้เพื่อดึงข้อมูลที่ต้องการออกมาจากฐานข้อมูล ซึ้งมีหลายแบบให้เลือกใช้งาน เช่น

- find(filter, options) เลือกเอกสาร (documnet) ทั้งหมดที่ตรงกับเงื่อนไข

- findOne(filter, options) เลือกเอกสาร (document) ที่ตรงกับเงื่อนไขเพียงรายการเดียวเท่านั้น หากมีหลายเอกสารที่ตรงกับเงื่อนไขกำหนด ผลลัพธ์การค้นจะเป็นเอกสาร (Document) ลำดับแรกที่พบก่อน

Update คือ การแก้ไขเอกสาร (document) ที่อยู่ในฐานข้อมูล โดยมีคำสั่งให้เลือกใช้งานหลายรูปแบบ เช่น

- updateOne(filter, data, options)
- updateMany(filter, data, options)
- replaceOne(filter, data, options)

Delete คือ การลบ document ออกจากฐานข้อมูล ซึ้งมีอยู่ด้วยกันหลาย วิธีเช่น
 - deleteOne(filter, options)
 - deleteMany(filter, options)

*/