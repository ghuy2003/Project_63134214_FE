import { Form , Upload} from "antd"
import { PlusOutlined } from '@ant-design/icons';
const UploadFile = () => {
    const normFile = (e) => {
        if (Array.isArray(e)) {
          return e;
        }
        return e?.fileList;
      };
      return (
        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
        <Upload action="/upload.do" listType="picture-card">
        <div>
            <PlusOutlined />
            <div
            style={{
                marginTop: 8,
            }}
            >
            Upload
            </div>
        </div>
        </Upload>
    </Form.Item>

      )
}




export default UploadFile