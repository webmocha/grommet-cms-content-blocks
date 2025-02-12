import React, { Component, PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import AddIcon from 'grommet/components/icons/base/Add';
import TrashIcon from 'grommet/components/icons/base/Trash';
import PreviousIcon from 'grommet/components/icons/base/Previous';
import NextIcon from 'grommet/components/icons/base/Next';

export class RelatedContentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data || [{ href: "", title: "", content: "" }],
      label: props.label || "Related Content",
      activeTabIndex: 0,
    };

    this.onDataChange = this.onDataChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onTabsClick = this.onTabsClick.bind(this);
    this.onReorder = this.onReorder.bind(this);
  }

  onDataChange(e, i) {
    const { name, value } = e.target;
    const onchangeVal = [...this.state.data];
    onchangeVal[i][name] = value;
    this.setState({ data: onchangeVal });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  onAdd() {
    this.setState({
      data: [...this.state.data, { href: "", title: "", content: "" }],
      activeTabIndex: this.state.data.length,
    });
  }

  onDelete(i) {
    const deleteVal = [...this.state.data];
    deleteVal.splice(i, 1);
    this.setState({ data: deleteVal, activeTabIndex: 0 });
  }

  onSubmit(event) {
    event.preventDefault();
    const formData = Object.assign({}, this.state);
    this.props.onSubmit(formData);
  }

  onTabsClick(tabIndex) {
    this.setState({ activeTabIndex: tabIndex });
  }

  onReorder(direction) {
    const { data, activeTabIndex } = this.state;
    const newData = [...data];
    const swapIndex = direction === 'FORWARD' ? activeTabIndex + 1 : activeTabIndex - 1;

    if (swapIndex >= 0 && swapIndex < newData.length) {
      [newData[activeTabIndex], newData[swapIndex]] = [newData[swapIndex], newData[activeTabIndex]];
      this.setState({ data: newData, activeTabIndex: swapIndex });
    }
  }

  render() {
    const { data, label, activeTabIndex } = this.state;
    const tabs = data.map((_, index) => (
      <Tab title={`Content ${index + 1}`} key={index} onClick={() => this.onTabsClick(index)} />
    ));

    return (
      <Box colorIndex="light-2" pad="medium">
        <fieldset>
          <FormField label="label" help="Enter a label" htmlFor="label">
            <input
              name="label"
              value={label}
              type="text"
              onChange={(e) => this.onDataChange(e, 0)}
            />
          </FormField>
        </fieldset>
        <Box direction="row" align="center">
          <Button icon={<AddIcon />} onClick={this.onAdd} pad="small">
            Add
          </Button>
          <Box pad="small"></Box>
          {data.length > 1 && (
            <Button
              icon={<TrashIcon />}
              onClick={() => this.onDelete(activeTabIndex)}
              pad="small"
            >
              Delete
            </Button>
          )}       
        </Box>
        <Box direction="row" align="center">
                  <Button icon={<PreviousIcon />} onClick={() => this.onReorder('BACKWARD')} pad="small">
                 
                  </Button>
                  <Box pad="small"></Box>
                  <Button icon={<NextIcon />} onClick={() => this.onReorder('FORWARD')} pad="small">
             
                  </Button>
                </Box>
        <Tabs activeIndex={activeTabIndex}>
          {tabs}
        </Tabs>
        {data.length > 0 && (
          <Box colorIndex="light-2" pad="medium">
            <Form>
              <FormFields>
                <fieldset>
                  <FormField label="href" help="Enter an href" htmlFor="href">
                    <input
                      name="href"
                      value={data[activeTabIndex].href}
                      type="text"
                      onChange={(e) => this.onDataChange(e, activeTabIndex)}
                    />
                  </FormField>
                  <FormField
                    label="title"
                    help="Enter a title"
                    htmlFor="title"
                  >
                    <input
                      name="title"
                      type="text"
                      value={data[activeTabIndex].title}
                      onChange={(e) => this.onDataChange(e, activeTabIndex)}
                    />
                  </FormField>
                  <FormField
                    label="content"
                    help="Enter content"
                    htmlFor="content"
                  >
                    <input
                      name="content"
                      type="text"
                      value={data[activeTabIndex].content}
                      onChange={(e) => this.onDataChange(e, activeTabIndex)}
                    />
                  </FormField>
                </fieldset>
              </FormFields>
              <Footer pad="medium">
               
              </Footer>
            </Form>
          </Box>
        )}
        <Footer pad="medium">
          <Button
            onClick={this.onSubmit}
            primary={false}
            type="submit"
            label="Done"
          />
        </Footer>
      </Box>
    );
  }
}

RelatedContentForm.propTypes = {
  data: PropTypes.array,
  onDataChange: PropTypes.func,
  onAdd: PropTypes.func,
  onDelete: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default RelatedContentForm;
