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
      width: props.width || "medium",
      size: props.width || "small",
      links: props.links|| [{ label: "", href: "" }],
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
    const onchangeVal = [...this.state.links];
    onchangeVal[i][name] = value;
    this.setState({ links: onchangeVal });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  onAdd() {
    this.setState({
      links: [...this.state.links, { label: "", href: "" }],
      activeTabIndex: this.state.links.length,
    });
  }

  onDelete(i) {
    const deleteVal = [...this.state.links];
    deleteVal.splice(i, 1);
    this.setState({ links: deleteVal, activeTabIndex: 0 });
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
    const { links, activeTabIndex } = this.state;
    const newLinks = [...links];
    const swapIndex = direction === 'FORWARD' ? activeTabIndex + 1 : activeTabIndex - 1;

    if (swapIndex >= 0 && swapIndex < newLinks.length) {
      [newLinks[activeTabIndex], newLinks[swapIndex]] = [newLinks[swapIndex], newLinks[activeTabIndex]];
      this.setState({ links: newLinks, activeTabIndex: swapIndex });
    }
  }

  render() {
    const { size, width, links, activeTabIndex } = this.state;
    const tabs = links.map((_, index) => (
      <Tab title={`Link ${index + 1}`} key={index} onClick={() => this.onTabsClick(index)} />
    ));

    return (
      <Box colorIndex="light-2" pad="medium">
        <Box direction="row" align="center">
          <Button icon={<AddIcon />} onClick={this.onAdd} pad="small">
            Add
          </Button>
          <Box pad="small"></Box>
          {links.length > 1 && (
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
        {links.length > 0 && (
          <Box colorIndex="light-2" pad="medium">
            <Form>
              <FormFields>
                <fieldset>
                  <FormField
                    label="Label"
                    help="Enter a label"
                    htmlFor="label"
                  >
                    <input
                      name="label"
                      type="text"
                      value={links[activeTabIndex].label}
                      onChange={(e) => this.onDataChange(e, activeTabIndex)}
                    />
                  </FormField>
                  <FormField label="Page URL" help="Enter the url of the page" htmlFor="href">
                    <input
                      name="href"
                      value={links[activeTabIndex].href}
                      type="text"
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
  links: PropTypes.array,
  onDataChange: PropTypes.func,
  onAdd: PropTypes.func,
  onDelete: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default RelatedContentForm;
