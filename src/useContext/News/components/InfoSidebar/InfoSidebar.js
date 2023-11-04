import BookmarkInformation from '../BookmarkSummary/BookmarkInformation';
import classes from './InfoSidebar.module.css';

function InfoSidebar() {
  return (
    <aside className={classes.sidebar}>
      <BookmarkInformation />
    </aside>
  );
}

export default InfoSidebar;
